import { skills } from "@/data/siteConfig";

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-white/[0.02] rounded-3xl">
      <p className="text-primary-500 font-medium mb-2">My Skills</p>
      <h2 className="section-title">Technical Expertise</h2>
      <p className="section-subtitle">
        Technologies and tools I use to bring ideas to life.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>{skill.name}</span>
              <span className="text-primary-500">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-pink-500 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
