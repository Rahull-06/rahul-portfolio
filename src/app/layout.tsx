import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Rathod — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Java, DSA, and scalable system design. Open to SDE roles and internships.",
  keywords: [
    "Rahul Rathod",
    "Full Stack Developer",
    "MERN Stack",
    "Java",
    "DSA",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Rathod" }],
  openGraph: {
    title: "Rahul Rathod — Full Stack Developer",
    description: "Building scalable systems, not just apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Epilogue:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}