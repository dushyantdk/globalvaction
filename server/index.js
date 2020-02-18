const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
// the __dirname is the current directory from where the script is running
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.post('/send-mail', (req,res) => {
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:  "pintukumar@ucreate.co.in",
        pass:  "kumar@987#@!",
    },
    tls: {
        ciphers:'SSLv3'
    }
    });
    const mailOptions = {
        to:'dushyantcreate@gmail.com',
        subject: 'Query received',
        html: '<table><tr><td colspan="2"><b>Please Detail:</b></td></tr><tr><td><b>Name:</b></td><td>'+req.body.firstName+'</td></tr><tr><td><b>Contact number:</b></td><td>'+req.body.Phoneno+'</td></tr><tr><td><b>Email:</b></td><td>'+req.body.email+'</td></tr></table>'
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            // eslint-disable-next-line no-console
            console.log('i am check error ', error);
        } else {
            // eslint-disable-next-line no-console
            console.log('Email sent: ' + info.response);
        }
    });
    res.json({
        success: true,
        data: [],
        status: 200,
        message: 'mail send successfully'

    });
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});app.listen(port, () => {
    console.log('app running');
});