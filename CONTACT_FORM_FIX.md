# Contact Form Configuration & Fixes

## ✅ Status: Refactored and Modernized

The contact form has been refactored to use:
- **Frontend**: React Hook Form + Zod (Validation)
- **Backend**: Improved Nodemailer implementation with better error handling.

## 🚀 How to Test Locally

### 1. Important: Use `vercel dev`
Standard `vite` (`npm run dev`) **cannot** run the backend API code in `api/contact.js`. You must use Vercel CLI.

1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```
2. Run the development server:
   ```bash
   vercel dev
   ```
3. Open http://localhost:3000

### 2. Environment Variables (.env)
You must have a `.env` file in the root directory for local testing:

```bash
# .env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=degrante77@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # Your 16-char App Password (NOT your login password)
SMTP_FROM=degrante77@gmail.com
TO_EMAIL=degrante77@gmail.com
```

> **Note**: If you don't have these set, you will see a specific "Server misconfiguration" error when testing.

## 🌍 Deployment (Vercel)

Ensure these same Environment Variables are set in your Vercel Project Settings:
**Settings** → **Environment Variables**

## 🔧 Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| "API not available" | Running with `npm run dev` | Use `vercel dev` instead |
| "Server misconfiguration" | Missing Env Vars | Add `SMTP_HOST`, `SMTP_USER`, etc. to Vercel/local .env |
| "Method not allowed" | Sending GET instead of POST | Browser should handle this automatically. Clear cache. |
| "Failed to send message properly" | Bad SMTP credentials | Check if App Password is revoked or incorrect |

## 📦 Dependencies Added
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
