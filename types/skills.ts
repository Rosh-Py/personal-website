/** Proficiency level for a technical skill. */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/** A single technical skill with proficiency metadata. */
export interface Skill {
  name: string;
  level: SkillLevel;
  /** Years of hands-on experience. */
  years: number;
  icon?: string;
}

/** A named group of related skills (e.g. "Frontend", "Backend"). */
export interface SkillCategory {
  name: string;
  skills: Skill[];
}
