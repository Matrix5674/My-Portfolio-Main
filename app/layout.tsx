import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./Components/Theme";
import SocialBar from "./Components/SocialBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soham Sahasrabuddhe",
  description: "Welcome to my portfolio! I am a full stack developer experienced in HTML/CSS, ReactJS/NextJS/TypeScript, Python, Flask, Java, C, and C++. My hobbies include Club Soccer, Badminton, volunteering, and programming. I enjoy working on personal projects in my freetime (like this website), and am always pushing to learn more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={Theme}>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
