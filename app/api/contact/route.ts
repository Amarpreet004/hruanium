import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, services, message } = body;

    // Create a transporter using Gmail SMTP
    // Note: You'll need to set up App Password for your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'falconsolutions492@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD // You'll need to set this up
      }
    });

    // Email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not specified'}

Services Requested:
${services.join(', ')}

Message:
${message || 'No additional message provided'}

Time: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: `"Website Contact Form" <falconsolutions492@gmail.com>`,
      to: 'falconsolutions492@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
