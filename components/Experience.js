import { experience } from "@/data/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-white/[0.02] rounded-3xl">
      <p className="text-primary-500 font-medium mb-2">My Journey</p>
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">A quick look at my professional path so far.</p>

      <div className="relative border-l-2 border-primary-500/30 pl-8 space-y-10">
        {experience.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
            <p className="text-sm text-primary-500 font-medium">{item.period}</p>
            <h3 className="text-lg font-bold mt-1">{item.role}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.company}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
