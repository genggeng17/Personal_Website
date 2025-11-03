import Link from "next/link";
import { clsx } from "clsx";

type Social = {
  github?: string;
  email?: string;
  [k: string]: string | undefined;
};

export default function SocialLinks({ links }: { links: Social }) {
  const items = [
    links.github ? { label: "GitHub", href: links.github } : null,
    links.email ? { label: "Email", href: links.email } : null,
  ].filter(Boolean) as {label: string, href: string}[];

  return (
    <div className="flex gap-3">
      {items.map((it) => (
        <Link
          key={it.label}
          href={it.href}
          className={clsx("text-sm px-3 py-1.5 rounded-full border transition",
            "border-neutral-300 hover:border-primary hover:text-primary dark:border-neutral-700")}
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
