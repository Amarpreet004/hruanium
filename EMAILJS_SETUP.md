# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Service ID: Choose a name (e.g., "gmail_service")
   - User ID: falconsolutions492@gmail.com
   - Follow the authentication steps
5. Save the service and note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Services Requested:
{{services}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" settings
2. Find your **Public Key** in the API Keys section

## Step 5: Update Environment Variables
1. Open `.env.local` file in your project
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email: falconsolutions492@gmail.com

## Email Template Variables Used:
- `{{to_email}}` - Your email (falconsolutions492@gmail.com)
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{company}}` - Customer's company name
- `{{services}}` - Selected services (comma-separated)
- `{{message}}` - Customer's message
- `{{reply_to}}` - Customer's email for replies

## Free Plan Limits:
- 200 emails per month
- Perfect for contact forms

## Security Notes:
- Environment variables are safe for client-side use with NEXT_PUBLIC_ prefix
- EmailJS handles the actual email sending securely
- No sensitive credentials are exposed in your code

## Troubleshooting:
- Make sure environment variables are set correctly
- Restart the development server after changing .env.local
- Check EmailJS dashboard for email delivery status
- Verify email service is properly connected and authenticated
