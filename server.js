const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/submit-form', (req, res) => {
  const { name, phone, email, service, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'techsolutionsinfo1@gmail.com', // Your email address
      pass: 'Ritaodeka21@' // Your email password (make sure to use app-specific password if using Gmail)
    }
  });

  // Email options
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'techsolutionsinfo1@gmail.com', // Your email address where you want to receive form submissions
    subject: 'New form submission',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${service}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
