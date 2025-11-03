import Image from "next/image";
import { site, profile, social } from "@/site.config";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const showTagline = site.tagline && site.tagline !== "NONE";
  const avatarSrc = profile.avatar && profile.avatar.length > 0 ? profile.avatar : "/avatar.png";

  return (
    <div className="px-6 md:px-10 max-w-4xl mx-auto">
      <section className="pt-16 pb-10">
        <div className="flex items-center gap-6">
          <Image
            src={avatarSrc}
            alt={site.name}
            width={88}
            height={88}
            className="rounded-full ring-2 ring-primary/20 shadow-soft"
            priority
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{site.name}</h1>
            {showTagline ? (
              <p className="text-neutral-600 dark:text-neutral-300 mt-1">{site.tagline}</p>
            ) : (
              <p className="text-neutral-600 dark:text-neutral-300 mt-1">{profile.bio_short}</p>
            )}
            <div className="mt-3">
              <SocialLinks links={social} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 shadow-soft bg-white/70 dark:bg-neutral-900/60">
          <h2 className="text-xl font-semibold mb-3">关于我</h2>
          <p className="leading-7 text-neutral-700 dark:text-neutral-300">
            {profile.bio_short}
          </p>
        </div>
      </section>
    </div>
  );
}
