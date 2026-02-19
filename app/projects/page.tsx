import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section>
      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-600 transition"
          >
            {/* Project Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* View Details Button */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-block text-center bg-blue-600 px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
