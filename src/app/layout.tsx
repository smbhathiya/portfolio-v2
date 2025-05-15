import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "@/components/client-layout";
import BackToTop from "../components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhathiya Lakshan | Web Application Developer",
  description:
    "Portfolio of Bhathiya Lakshan — a web application developer skilled in .NET Web API, Next.js, React, React Native, and Node.js. Explore my projects and experience in building modern full-stack applications.",
  keywords: [
    "Bhathiya Lakshan",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "React Native",
    ".NET Web API",
    "Node.js",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Bhathiya Lakshan" }],
  creator: "Bhathiya Lakshan",
  openGraph: {
    title: "Bhathiya Lakshan | Web Application Developer | Portfolio",
    description:
      "Experienced in .NET Web API, Next.js, React, and Node.js. Check out my portfolio to see my work.",
    url: "https://bhathiya-.dev/",
    siteName: "Bhathiya Lakshan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ClientLayout>
            {children}
            <BackToTop />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
