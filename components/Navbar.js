"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/siteConfig";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container !py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">
          {profile.name.split(" ")[0]}.dev
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-primary-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !py-2 !px-5 text-sm">
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/10">
          <ul className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium hover:text-primary-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
