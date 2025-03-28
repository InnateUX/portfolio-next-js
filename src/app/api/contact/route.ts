import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const data = await req.json();
    const { name, email, company, message, budget,categories } = data;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.innateuxdesign.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construct email body with categories
    const categoriesText = categories && categories.length > 0 
        ? `Interested Categories: ${categories.join(", ")}` 
        : "No categories selected";

    // Construct email body
    const emailBody = `
      New Contact Form Submission:
      
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Budget: ${budget}
      ${categoriesText}
      Message:
      ${message}
    `;

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ 
      message: "Error sending email", 
      error: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}