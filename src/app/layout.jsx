import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

// Initialize the font
const geist = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sarang Bangade",
  description: `A professional web application developer specializing in modern JavaScript frameworks, Python, AI-driven applications, and scalable cloud-based solutions. Experienced in building high-performance frontend and backend systems with a strong focus on clean architecture and UI/UX excellence.`,
  keywords: [
    "Sarang Bangade",
    "Full Stack Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI Developer",
    "Python Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Sarang Bangade", url: "https://sarangbangade.dev" }],
  creator: "Sarang Bangade",
  openGraph: {
    title: "Sarang Bangade",
    description: `Professional Web Application Developer skilled in JavaScript, Python, AI systems, and scalable modern web technologies.`,
    url: "https://sarangbangade.dev",
    siteName: "Sarang Bangade Portfolio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className={`${geist.className} bg-black text-white`}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
