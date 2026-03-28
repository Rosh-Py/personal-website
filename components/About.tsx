import { FiCalendar, FiMapPin, FiMail, FiCheckCircle } from 'react-icons/fi';
import {
  siteConfig,
  aboutContent,
  softSkills,
  careerMilestones,
} from '@/data/personal';
import SocialIcons from '@/components/SocialIcons';

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
          {/* Contact sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Let&apos;s connect
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FiMail className="h-4 w-4 text-blue-500" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-blue-500"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FiMapPin className="h-4 w-4 text-blue-500" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FiCalendar className="h-4 w-4 text-blue-500" />
                  <span>{siteConfig.availability}</span>
                </div>
              </div>
              <div className="mt-6">
                <SocialIcons />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-5 text-4xl font-semibold text-slate-900 dark:text-slate-50 md:text-5xl">
                About Me
              </h2>
              {aboutContent.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-lg leading-relaxed text-slate-600 dark:text-slate-300 ${i > 0 ? 'mt-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Soft skills card */}
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-50">
                What I Bring to the Table
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <FiCheckCircle className="h-4 w-4 flex-shrink-0 text-blue-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career timeline */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                Career Journey
              </h3>
              <div className="space-y-5 border-l border-slate-200 pl-6 dark:border-slate-800">
                {careerMilestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[1.8rem] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-blue-500">
                          {milestone.year}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {milestone.company}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        {milestone.title}
                      </h4>
                      {/* Render as bullet list when there are multiple points */}
                      {milestone.description.length === 1 ? (
                        <p className="text-slate-600 dark:text-slate-300">
                          {milestone.description[0]}
                        </p>
                      ) : (
                        <ul className="list-disc space-y-1 pl-4 text-slate-600 dark:text-slate-300">
                          {milestone.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
