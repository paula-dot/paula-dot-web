// api/contact.js
// Vercel serverless function to receive contact form submissions and send email via SendGrid

import sgMail from '@sendgrid/mail';

// Lazy init: set API key from env var at first import
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body || {};

  // Basic validation
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing required fields: email and message.' });
  }

  // Limit lengths to avoid abuse
  if (email.length > 320 || (subject && subject.length > 200) || message.length > 5000) {
    return res.status(413).json({ error: 'Payload too large.' });
  }

  const to = process.env.SENDGRID_TO;
  const from = process.env.SENDGRID_FROM || to;

  if (!process.env.SENDGRID_API_KEY || !to) {
    console.error('Missing SENDGRID_API_KEY or SENDGRID_TO in environment');
    // Still return 200 to avoid leaking server config to public callers, but inform client minimally
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  const msg = {
    to,
    from,
    subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
    text: `From: ${email}\n\n${message}`,
    html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Message sent — thank you!' });
  } catch (err) {
    console.error('SendGrid send error:', err?.response?.body || err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

