/*
import nodemailer from 'nodemailer';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function POST(req) {
    const { email, subject, message } = await req.json();

    // Check if required fields are provided
    if (!email || !subject || !message) {
        return new Response(
            JSON.stringify({ error: 'Missing required fields' }),
            { status: 400 }
        );
    }

    try {
        // Create a transporter using Gmail's SMTP service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.local.GMAIL_USER, // Your Gmail address
                pass: process.env.local.GMAIL_APP_PASSWORD, // App-specific password
            },
        });

        // Set up the email details
        const mailOptions = {
            from: process.env.local.GMAIL_USER,
            to: process.env.local.GMAIL_USER, // or any other email you'd like to send it to
            subject: subject,
            text: `Message from ${email}:\n\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to send message' }),
            { status: 500 }
        );
    }
}
*/
