"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowRight } from "react-icons/fi";
import { profile, socials } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="section-container !py-0 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-primary-500 font-medium mb-4">
            👋 Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
            I&apos;m a <span className="gradient-text">{profile.role}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-outline"
            >
              Download CV <FiDownload />
            </a>
          </div>

          <div className="flex items-center gap-5 text-2xl text-gray-500 dark:text-gray-400">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-float">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-pink-500 blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
