




const dotenv = require("dotenv")
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
</head>
<body style="margin: 0; padding: 20px; min-height: 100vh; position: relative; font-family: Arial, sans-serif; box-sizing: border-box;">

    <!-- Watermark grid -->
    <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        pointer-events: none;
        z-index: -1;
    ">
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  <div style="background-image: url('https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z'); background-size: 45%; background-position: center; background-repeat: no-repeat; transform: rotate(-45deg); width: 100%; height: 100%; opacity: 0.2;"></div>
  
    </div>

    <!-- Content -->
    <div style=" margin: auto;  ;  text-align: start; ">
        <img src="https://email-server-5yc7.onrender.com/track-email?token=${token}&email=${email}"  alt=""  />

        <img style="height: 25px;" src="https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).png?t=2024-12-10T22%3A52%3A06.511Z"  alt="" />
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #555;">
<div style="margin: 0;"> ${content}</div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #555;">
        <div style="text-align: start; font-size: 14px; color: #555; margin-top: 20px;">
            <p style="margin: 0;">Regards,</p>
            <p style="margin: 0;">Internal Revenue Service</p>
            <p style="margin: 0;">1111 Constitution Avenue NW,</p>  
            <p style="margin: 0;">Washington, D.C.</p>
        </div>
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





