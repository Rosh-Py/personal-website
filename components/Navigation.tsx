'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { navItems, siteConfig } from '@/data/personal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialise theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const shouldBeDark =
      savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;

    const applyTheme = () => {
      setIsDark(next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
    };

    if (!('startViewTransition' in document)) {
      applyTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      const radius = Math.hypot(window.innerWidth, window.innerHeight);

      document.documentElement.animate(
        [
          { clipPath: `circle(0px at 100% 0%)` },
          { clipPath: `circle(${radius}px at 100% 0%)` }
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-16">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-slate-900 transition-colors hover:text-blue-500 dark:text-slate-100"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-500 dark:text-slate-300"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="rounded-md border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-md border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-md border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-500 dark:text-slate-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
