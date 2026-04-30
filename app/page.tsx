import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 py-10">
      {/* ================= LEFT SIDE: Content ================= */}
      <div className="flex-1 order-2 lg:order-1">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I’m Mohammad Saif Sami 👋
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
          I build web and mobile applications using React, Next.js, and Firebase. 
          I'm passionate about creating efficient, user-centric digital experiences 
          and documenting my journey along the way.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/certifications"
            className="inline-block border border-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            View Certifications
          </Link>
        </div>
      </div>

      {/* ================= RIGHT SIDE: Interactive Image ================= */}
      <div className="flex-shrink-0 order-1 lg:order-2">
        <div className="relative group w-64 h-64 md:w-80 md:h-80">
          <Link
            href="https://www.linkedin.com/in/msaifsami/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative overflow-hidden rounded-3xl border-2 border-gray-800 shadow-2xl"
          >
            {/* Your Profile Picture */}
            <Image
              src="/portfolio photo.png"
              alt="Mohammad Saif Sami"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />

            {/* LinkedIn Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          </Link>
          
          {/* Subtle background glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10"></div>
        </div>
      </div>
    </section>
  );
}