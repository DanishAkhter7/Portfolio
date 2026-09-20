import { profile } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-8">
      <div className="section-container !py-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
