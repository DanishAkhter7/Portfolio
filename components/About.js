"use client";

import { useState } from "react";
import {
  FiUser,
  FiCode,
  FiCoffee,
  FiSmile,
  FiX,
  FiExternalLink,
  FiAward,
  FiFileText,
  FiDownload,
} from "react-icons/fi";
import { profile, certificates } from "@/data/siteConfig";

const stats = [
  { icon: <FiCode />, value: `${profile.yearsExperience}+`, label: "Years Experience" },
  { icon: <FiUser />, value: `${profile.projectsCompleted}+`, label: "Projects Completed" },
  { icon: <FiSmile />, value: `${profile.happyClients}+`, label: "Happy Clients" },
  { icon: <FiCoffee />, value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="about" className="section-container">
      <p className="text-primary-500 font-medium mb-2">About Me</p>
      <h2 className="section-title">Who I Am</h2>
      <p className="section-subtitle">
        Get to know a little more about my background and what drives me.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {profile.about}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Location: </span>
              <span className="text-gray-500 dark:text-gray-400">{profile.location}</span>
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              <span className="text-gray-500 dark:text-gray-400">{profile.email}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-primary-500 text-2xl mb-3 flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates (PDF) */}
      {certificates?.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center gap-2 mb-8">
            <FiAward className="text-primary-500" size={22} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className="card p-6 text-left group flex items-start gap-4"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <FiFileText size={26} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-primary-500">
                    View PDF →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PDF preview modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-white dark:bg-[#12121a] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10">
              <div>
                <h4 className="font-bold">{activeCert.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activeCert.issuer} • {activeCert.date}
                </p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>

            <div className="flex-1 bg-gray-100 dark:bg-black/30 min-h-[60vh]">
              {/* Embedded PDF viewer */}
              <iframe
                src={activeCert.file}
                title={activeCert.title}
                className="w-full h-full min-h-[60vh]"
              />
            </div>

            <div className="p-5 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-3">
              <a href={activeCert.file} target="_blank" rel="noreferrer" className="btn-outline text-sm">
                Open in New Tab <FiExternalLink />
              </a>
              <a href={activeCert.file} download className="btn-outline text-sm">
                Download <FiDownload />
              </a>
              {activeCert.credentialUrl && (
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  Verify Credential <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}