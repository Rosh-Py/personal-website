import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiTrpc,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiSentry,
  SiDatadog,
} from 'react-icons/si';
import { TbCloudFilled } from 'react-icons/tb';
import type { IconType } from 'react-icons';
import { skillsData } from '@/data/personal';

const SKILL_ICONS: Record<string, IconType> = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  Redux: SiRedux,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  tRPC: SiTrpc,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  AWS: TbCloudFilled,
  Sentry: SiSentry,
  Datadog: SiDatadog,
};

export default function Skills() {
  const allSkills = skillsData.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="section-spacing border-b border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="mb-3 text-4xl font-semibold text-slate-900 dark:text-slate-50 md:text-5xl">
            Skills &amp; Expertise
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Technologies and tools I use to design, ship, and maintain
            production-ready products.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {allSkills.map((skill) => {
            const Icon = SKILL_ICONS[skill.name];
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
