// api/contact.js
// Vercel serverless function to receive contact form submissions and send email via SendGrid or SMTP (nodemailer) fallback

import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';

// Lazy init for SendGrid if API key present
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

function mask(v = '') {
  if (!v) return '';
  if (v.length <= 6) return '•••••';
  return v.slice(0, 3) + '••••' + v.slice(-3);
}

function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body || {};
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing required fields: email and message.' });
  }

  // Basic size checks
  if (email.length > 320 || (subject && subject.length > 200) || message.length > 10000) {
    return res.status(413).json({ error: 'Payload too large.' });
  }

  // Config from env
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const sendgridTo = process.env.SENDGRID_TO;

  // Support multiple env naming conventions (SMTP_* or GMAIL_*)
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || '';
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';
  const smtpFrom = process.env.SMTP_FROM || smtpUser || process.env.GMAIL_USER || '';
  const smtpTo = process.env.TO_EMAIL || process.env.GMAIL_USER || '';
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const smtpSecure = (process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === '1') || false;

  // Allow detailed SMTP errors when developing locally or when DEBUG_SMTP=true
  const showDetail = (process.env.NODE_ENV !== 'production') || (process.env.DEBUG_SMTP === 'true');

  console.log('Email config at runtime:', {
    SENDGRID: sendgridKey ? 'present' : 'missing',
    SENDGRID_TO: mask(sendgridTo),
    SMTP_USER: mask(smtpUser),
    SMTP_PASS: smtpPass ? '•••••' : '',
    SMTP_FROM: mask(smtpFrom),
    TO_EMAIL: mask(smtpTo),
    SMTP_HOST: smtpHost,
    SMTP_PORT: smtpPort,
    SMTP_SECURE: smtpSecure,
  });

  // Prefer SendGrid if configured
  if (sendgridKey && sendgridTo) {
    const msg = {
      to: sendgridTo,
      from: process.env.SENDGRID_FROM || sendgridTo,
      subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ message: 'Message sent — thank you!' });
    } catch (err) {
      console.error('SendGrid send error:', err?.response?.body || err);
      return res.status(500).json({ error: 'Failed to send message via SendGrid.' });
    }
  }

  // Else try SMTP (nodemailer) if configured
  if (smtpUser && smtpPass && smtpTo && smtpFrom) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Helpful debug flags for development
      logger: (process.env.NODE_ENV !== 'production'), // verbose logs in development
      debug: (process.env.NODE_ENV !== 'production'),
      // tls: { rejectUnauthorized: false }, // uncomment only for self-signed certs
    });

    // Verify transporter before sending to provide clearer errors
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('SMTP transporter verification failed:', verifyErr);
      // In development or when DEBUG_SMTP is enabled, return the verification error message to assist debugging
      if (showDetail) {
        return res.status(500).json({ error: 'SMTP verification failed', detail: String(verifyErr && verifyErr.message ? verifyErr.message : verifyErr) });
      }
      return res.status(500).json({ error: 'SMTP service not available' });
    }

    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('SMTP send success:', info && info.messageId ? { messageId: info.messageId } : info);
      return res.status(200).json({ message: 'Message sent via SMTP — thank you!' });
    } catch (err) {
      console.error('SMTP send error:', err);
      // Provide more actionable error in non-production to help debugging
      if (showDetail) {
        return res.status(500).json({ error: 'Failed to send message via SMTP.', detail: String(err && err.message ? err.message : err) });
      }
      return res.status(500).json({ error: 'Failed to send message via SMTP.' });
    }
  }

  // No email configuration found
  const missing = [];
  if (!sendgridKey || !sendgridTo) missing.push('SendGrid or');
  if (!smtpUser || !smtpPass || !smtpTo) missing.push('SMTP (SMTP_USER, SMTP_PASS, TO_EMAIL)');

  console.error('Missing email configuration:', missing.join(' / '));
  return res.status(500).json({ error: 'Email service not configured.' });
}
