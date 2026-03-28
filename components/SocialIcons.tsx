import { SiGithub, SiX, SiGmail } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { socialLinks } from '@/data/personal';

const ICON_MAP: Record<string, IconType> = {
  Github: SiGithub,
  Linkedin: FiLinkedin,
  Twitter: SiX,
  Mail: SiGmail,
};

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = ICON_MAP[social.icon];
        if (!Icon) return null;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-200 p-3 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-50"
            aria-label={social.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
