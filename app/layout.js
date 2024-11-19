import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bhathiya Lakshan",
  description: "Created By Bhathiya Lakshan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* SEO meta tag for Google Site Verification */}
            <meta
                name="google-site-verification"
                content="RzNWdKkTRXUFmv9ouIVqoWv6OyYrOVM5_UoFdViPTSY"
            />

            {/* Page Title */}
            <title>Bhathiya Lakshan</title>

            {/* Meta Description */}
            <meta
                name="description"
                content="Created By Bhathiya Lakshan"
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
