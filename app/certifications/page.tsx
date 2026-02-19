import Image from "next/image";
import { certifications } from "../data/certifications";

export default function CertificationsPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Certifications
      </h1>

      <div className="space-y-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex gap-6 items-start border border-gray-800 rounded-xl p-6"
          >
            {/* Logo */}
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold">
                {cert.title}
              </h2>

              <p className="text-gray-400 mt-1">
                {cert.issuer} • {cert.year}
              </p>

              <p className="text-gray-300 mt-3">
                {cert.description}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Credential →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
