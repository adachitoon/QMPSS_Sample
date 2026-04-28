"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Skill, TagColor } from "@/data/skills";
import { MAIN_CATEGORY_COLOR, SUB_CATEGORY_COLOR } from "@/data/skills";

type GalleryCardProps = {
  skill: Skill;
  /** 1始まりの通し番号 */
  badgeIndex?: number;
  /** ファーストビュー扱いで優先読み込みする */
  priority?: boolean;
};

type Sigil = "blue" | "green" | "purple" | "red";

const SIGIL_BY_TONE: Record<TagColor, Sigil> = {
  blue: "blue",
  green: "green",
  purple: "purple",
  red: "red",
  pink: "red",
  orange: "red",
  yellow: "green",
  brown: "purple",
  gray: "purple",
};

export function GalleryCard({ skill, badgeIndex, priority }: GalleryCardProps) {
  const tone: TagColor = skill.subCategory
    ? SUB_CATEGORY_COLOR[skill.subCategory]
    : MAIN_CATEGORY_COLOR[skill.mainCategory];
  const sigil = SIGIL_BY_TONE[tone];

  return (
    <Link
      href={`/skills/${skill.slug}`}
      suppressHydrationWarning
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-[6px]",
        "border border-[var(--color-line)] bg-[var(--color-surface)]",
        "transition-[transform,border-color,box-shadow] duration-200 ease-out",
        "hover:-translate-y-[2px] hover:border-[var(--color-ink)] hover:shadow-card-hover",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]",
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        <Image
          src={`/cards/sigil-${sigil}.png`}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
        />
        {typeof badgeIndex === "number" && (
          <span className="absolute left-3 top-2.5 font-mono text-[10.5px] tracking-[0.18em] text-white/80 mix-blend-screen">
            {badgeIndex.toString().padStart(3, "0")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3.5">
        <h3
          suppressHydrationWarning
          className="text-[14.5px] font-semibold leading-[1.4] tracking-[-0.005em] text-[var(--color-ink)] line-clamp-3"
        >
          {skill.name}
        </h3>

        <span
          className={clsx(
            "mt-auto inline-flex items-center gap-1 self-end pt-1 text-[11px]",
            "text-[var(--color-ink-faint)] transition-all duration-200",
            "group-hover:text-[var(--color-ink)] group-hover:translate-x-0.5",
          )}
        >
          <span>開く</span>
          <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
