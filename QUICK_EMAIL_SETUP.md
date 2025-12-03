# Quick EmailJS Setup (5 Minutes)

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your Gmail account (falconsolutions492@gmail.com)
3. Verify your email

### Step 2: Connect Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Service ID: `gmail_service_01` (you can choose any name)
5. Authorize with your Gmail account
6. Save and copy the Service ID

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Template ID: `contact_form_01` (you can choose any name)
4. Set up template:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Services Requested:
{{services}}

Project Description:
{{message}}

You can reply directly to this email to respond to the customer.
```

5. Save and copy the Template ID

### Step 4: Get Public Key
1. Go to "Account" settings
2. Copy your Public Key

### Step 5: Update Environment Variables
Replace the content in `.env.local`:

```bash
# Replace with your actual EmailJS credentials
NEXT_PUBLIC_EMAILJS_SERVICE_ID=gmail_service_01
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=contact_form_01
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

### Step 6: Restart Server
```bash
npm run dev
```

## Option 2: Quick Alternative (Web3Forms - No signup needed)

If you want immediate email functionality without EmailJS setup, I can implement Web3Forms which is completely free and requires no account setup.

Would you like me to implement the Web3Forms alternative instead?

## Current Status
- ✅ Form validation working
- ✅ Error handling improved
- ✅ Fallback method shows form data
- ⏳ Email sending requires EmailJS setup

## Test the Form
1. Fill out the form completely
2. Click "Send My Inquiry"
3. You'll see an alert with the form data that would be sent
4. After EmailJS setup, emails will be sent to falconsolutions492@gmail.com

The form will work immediately with the fallback method, showing you exactly what data would be sent via email.
