import SocialIcons from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-custom flex justify-center py-8">
        <SocialIcons />
      </div>
    </footer>
  );
}
