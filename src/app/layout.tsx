import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "@/components/client-layout";
import BackToTop from "../components/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "C#",
    "SQL",
    "Web Development",
    "Mobile App Development",
    "UI/UX",
    "REST API",
    "Database Design",
    "Cloud Computing",
    "Software Architecture",
    "Sri Lankan Developer"
  ],
  authors: [{ name: "Bhathiya Lakshan", url: "https://bhathiya-.dev" }],
  creator: "Bhathiya Lakshan",
  publisher: "Bhathiya Lakshan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bhathiya Lakshan | Web Application Developer | Portfolio",
    description:
      "Experienced in .NET Web API, Next.js, React, and Node.js. Check out my portfolio to see my work.",
    url: "https://bhathiya.dev/",
    siteName: "Bhathiya Lakshan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhathiya Lakshan | Web Application Developer",
    description: "Full-stack web developer specializing in modern web technologies",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://bhathiya.dev"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://bhathiya.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
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
