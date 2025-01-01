




const dotenv = require("dotenv");
const nodemailer = require("nodemailer")


// Load environment variables
dotenv.config();
const sendThroughNodeMailer = async (email, subject, content, token) => {


    const trackingUrl = `http://localhost:8080/track?email=${email}&token=${token}`


    // Create a Transporter to send the mail.

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Use 465 for SSL or 587 for STARTTLS
        secure: true, // Use true for 465 and false for 587
        auth: {
            user: process.env.ZEPTO_USER, // Replace with your ZeptoMail SMTP username
            pass: process.env.ZEPTO_PASSWORD, // Replace with your ZeptoMail SMTP password
        },
        tls: {
            rejectUnauthorized: true, // Optional, enhances security
        },
    });




    // Set up the Mail Option
    const date = new Date();
    const mailOptions = {
        from: 'irs@myirs.xyz', // Use an email address from your ZeptoMail domain
        to: email, // Recipient's email
        subject: subject, // Subject
        html: `
      <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${subject}</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
                <img src="${trackingUrl}" alt="" />
                    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
                        <tr>
                            <td align="center">
                                <table style="background-color: #ffffff; border-radius: 5px; overflow: hidden; max-width: 600px;">
                                    <tr>
                                        <td style="padding: 20px; text-align: center;">
                                            <img src="https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z" alt="IRS Logo" style="max-width: 90px;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px;">
                                            <div>${content}</div>
                                            <p>Regards,<br>Internal Revenue Service<br>Address: 1111 Constitution Avenue NW<br> Washington, D.C.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
                                            <p>© ${date.getFullYear()} Internal Revenue Service</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
    `,
    };


    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        return error;
    }
};
module.exports = sendThroughNodeMailer;





