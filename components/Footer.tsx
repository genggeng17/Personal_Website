import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 mt-10">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
