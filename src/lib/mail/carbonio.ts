// Carbonio Mail Integration
// Documentation: https://docs.zextras.com/carbonio-ce/

import nodemailer from "nodemailer";

const mailConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: false,
};

const FROM = process.env.SMTP_FROM || process.env.SMTP_USER;
const ADMIN_EMAIL = "info@zexfrointl.com";

export async function sendWelcomeEmail(
  to: string,
  name: string,
): Promise<void> {
  // Implement Carbonio mail sending
  // You'll need to install nodemailer or similar package
  console.log(`Sending welcome email to ${to} (${name})`);

  // Example with nodemailer:
  // const transporter = nodemailer.createTransport(mailConfig);
  // await transporter.sendMail({
  //   from: process.env.MAIL_FROM,
  //   to,
  //   subject: "Welcome!",
  //   html: `<h1>Welcome, ${name}!</h1>`
  // });
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType?: string;
}): Promise<void> {
  const transporter = nodemailer.createTransport(mailConfig);
  const inquiryLabel =
    data.inquiryType === "quotation" ? "Quotation" : "General Info";
  const html = `
    <p><strong>Inquiry Type:</strong> ${inquiryLabel}</p>
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;
  // Send to admin
  await transporter.sendMail({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `Contact Form: ${data.subject}`,
    html,
    replyTo: data.email,
  });
  // Send confirmation to user
  await transporter.sendMail({
    from: FROM,
    to: data.email,
    subject: "We received your message - Zexfro International Ltd.",
    html: `<p>Dear ${data.name},</p><p>Thank you for contacting us. We have received your message and will get back to you soon.</p><hr>${html}`,
  });
}

export async function getMailStats() {
  // Implement mail statistics retrieval
  return {
    sent: 0,
    failed: 0,
    pending: 0,
  };
}

export async function getMailLogs() {
  // Implement mail logs retrieval
  return [];
}
