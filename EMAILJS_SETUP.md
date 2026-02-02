# EmailJS Setup Instructions

To enable the contact form functionality, you need to configure EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, click on **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## 3. Create an Email Template

1. Click on **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Design your template with these variables:
   ```
   From: {{from_name}}
   Email: {{from_email}}
   Message: {{message}}
   To: {{to_name}}
   ```
4. Example template:
   ```
   Hello {{to_name}},

   You have received a new message from your AI Consulting website:

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   This email was sent from your contact form.
   ```
5. Save the template and copy the **Template ID**

## 4. Get Your Public Key

1. Go to **"Account"** in the EmailJS dashboard
2. Find the **"API Keys"** section
3. Copy your **Public Key** (also called User ID)

## 5. Update the Contact Component

Open `src/components/Contact.jsx` and replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const USER_ID = 'YOUR_USER_ID';            // Replace with your Public Key
```

## 6. Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message
5. Verify the success message appears on the form

## Troubleshooting

- **Error: "Service ID not found"** - Double-check your Service ID
- **Error: "Template ID not found"** - Verify your Template ID
- **No email received** - Check your spam folder and verify your email service is connected
- **CORS errors** - Make sure you're using the correct Public Key

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

For higher limits, consider upgrading to a paid plan.

## Security Note

For production applications, consider moving these credentials to environment variables:
```javascript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
```

Then create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```
