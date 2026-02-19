import "./globals.css";
import Link from "next/link";
import React from "react"; // Added React import for types

export const metadata = {
  title: "Mohammad Saif Sami | Portfolio",
  description: "Projects and work by Mohammad Saif Sami",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-gray-800 px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <div className="space-x-4">
            <Link href="/projects">Projects</Link>
            <a
              href="https://github.com/MoSaifADU/Intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link href="/certifications">Certifications</Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Mohammad Saif Sami
        </footer>
      </body>
    </html>
  );
}