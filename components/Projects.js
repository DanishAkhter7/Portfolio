"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/siteConfig";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <p className="text-primary-500 font-medium mb-2">My Work</p>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
{"Some of the projects I've built and shipped recently."}      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden group">
            <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-primary-500"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-primary-500"
                >
                  <FiGithub /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
