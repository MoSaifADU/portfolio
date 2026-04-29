import "./globals.css";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
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

        {/* Changed to flex-col on mobile and flex-row on larger screens */}
        <main className="max-w-6xl mx-auto px-6 py-10 flex-grow flex flex-col md:flex-row gap-10">
          
          {/* Sidebar / Image Container */}
     

          {/* Main Content Area */}
          <div className="md:w-2/3">
            {children}
          </div>
          {/* Sidebar / Image Container */}
          <aside className="md:w-1/3 flex flex-col items-center">
            <div className="sticky top-10">
              <Image
                src="/portfolio photo.png" // Path to your image in the /public folder
                alt="Mohammad Saif Sami"
                width={300}
                height={300}
                className="rounded-2xl border-2 border-gray-800 shadow-xl object-cover"
                priority
              />
              <div className="mt-4 text-center md:text-left">
                <h2 className="text-xl font-semibold">Mohammad Saif Sami</h2>
                <p className="text-gray-400">Developer & Designer</p>
              </div>
            </div>
          </aside>
        </main>

        <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Mohammad Saif Sami
        </footer>
      </body>
    </html>
  );
}