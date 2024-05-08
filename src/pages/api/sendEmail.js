import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message , subject , number } = req.body;

    const mailOptions = {
      from: email,
      replyTo: email, 
      to: process.env.yourEmail, 
      subject: subject,
      text: `Name:  ${name}  -  Phone: ${number}\n\n\n ${message}`,
    };

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: false,
        auth: {
          user: process.env.smtpuser,
          pass: process.env.smtppass,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      await transporter.sendMail(mailOptions);
      console.log('Email sent');
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}