
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'taimacherif2404@gmail.com', 
    pass: 'coucou', 
  },
});


const mailOptions = {
  from: 'taimacherif2404@gmail.com', 
  to: 'taimacherif2404@gmail.com', 
  subject: 'Test d\'envoi d\'e-mail avec Node.js',
  text: 'Ceci est un test d\'envoi d\'e-mail avec Node.js.',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail envoyé :', info.response);
  }
});