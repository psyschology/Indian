const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Define route handler for POST requests to '/submit-form'
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'techsolutionsinfo1@gmail.com',
            pass: 'Ritaodeka21@',
        },
    });

    const mailOptions = {
        from: 'techsolutionsinfo1@gmail.com',
        to: 'techsolutionsinfo1@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Form submitted successfully');
        }
    });
});

// Define route handler for GET requests to '/submit-form'
app.get('/submit-form', (req, res) => {
    // Handle GET request logic here
    res.send('This is the form submission page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
