require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors()); // Allow frontend requests

// Basic route handler for GET requests to the root
app.get('/', (req, res) => {
  res.send('Hello, World! Your server is running!');
});

// Email route
app.post('/send-email', async (req, res) => {
  const { name, email, company, message } = req.body;

  // Configure your Bluehost SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'mail.innateuxdesign.com', // Change this to your Bluehost mail server
    port: 465, // Bluehost uses 465 for SSL or 587 for TLS
    secure: true, // Use true for port 465, false for port 587
    auth: {
      user: process.env.SMTP_USER, // Your Bluehost email
      pass: process.env.SMTP_PASS, // Your Bluehost email password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // From address
      to: process.env.RECIPIENT_EMAIL, // Your actual Bluehost email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});