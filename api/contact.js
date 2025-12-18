const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // 1. Set standard headers
  res.setHeader('Content-Type', 'application/json');
  // Adjust CORS for production if needed, or rely on Vercel's rewrite rules
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Prevent non-POST methods
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { name, email, message } = req.body || {};

    // 4. Validate input existence
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, or message.'
      });
    }

    // 5. Check for Server Configuration (Critical Step)
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SERVER ERROR: Missing SMTP environment variables in Vercel settings.');
      return res.status(503).json({
        success: false,
        message: 'Server misconfiguration: Email service not set up. Please contact the site owner directly.'
      });
    }

    // 6. Create Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE) === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 7. Send Mail
    await transporter.verify(); // Optional: verify connection first if speed isn't critical

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER, // Fallback to user if TO_EMAIL not set
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:0; border-top:1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background:#f9f9f9; padding:15px; border-radius:4px;">
            ${escapeHtml(message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });

  } catch (error) {
    console.error('Contact API Error:', error);

    // Distinguish between validation/nodemailer errors vs generic crashes if possible
    return res.status(500).json({
      success: false,
      message: 'Failed to send message properly. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.toString() : undefined
    });
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

