import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. Change function to 'async'
// 2. Update type to 'Promise'
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 3. Await the params object
  const { slug } = await params;

  // 4. Use the unwrapped slug to find the project
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back link */}
      <Link
        href="/projects"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {project.title}
      </h1>

      {/* Short description */}
      <p className="text-gray-400 text-lg mb-10">
        {project.shortDescription}
      </p>

      {/* ================= OVERVIEW ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          {project.overview}
        </p>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Problem Statement
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Proposed Solution
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {project.solution}
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      {project.features && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= TECH STACK ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ================= DEMO VIDEO ================= */}
      {project.video && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Demo Video
          </h2>
          <video
            controls
            className="w-full rounded-xl border border-gray-800"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      )}

      {/* ================= CHALLENGES ================= */}
      {project.challenges && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Challenges & Learnings
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}