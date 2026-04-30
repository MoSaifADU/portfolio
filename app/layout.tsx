import "./globals.css";
import Link from "next/link";
import React from "react";

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
      <body className="bg-gray-950 text-white antialiased min-h-screen flex flex-col">
        <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl hover:text-gray-400 transition-colors">
            Portfolio
          </Link>
          <div className="space-x-4">
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
            <a 
              href="https://github.com/MoSaifADU/Intro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
            <Link href="/certifications" className="hover:text-gray-400">Certifications</Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-10 flex-grow">
          {children}
        </main>

        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Mohammad Saif Sami
        </footer>
      </body>
    </html>
  );
}