import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">
        Hi, I’m Mohammad Saif Sami 👋
      </h1>

      <p className="text-gray-400 max-w-xl mb-6">
        I build web and mobile applications using React, Next.js, and Firebase.
        Here are some projects I’ve worked on.
      </p>

      {/* Added a flex container with gap-4 for spacing */}
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-700"
        >
          View Projects
        </Link>
        <Link
          href="/certifications"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-700"
        >
          View Certifications
        </Link>
      </div>
    </section>
  );
}