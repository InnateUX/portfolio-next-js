import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message, budget, interestedIn } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'mail.innateuxdesign.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBody = `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Message: ${message}
      Budget: ${budget || "Not specified"}  //
      Interested In: ${interestedIn?.length ? interestedIn.join(", ") : "Not specified"}
    `;

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
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}