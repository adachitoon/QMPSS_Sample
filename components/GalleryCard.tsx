"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Skill } from "@/data/skills";
import { Cover } from "./Cover";
import { PropertyChip } from "./PropertyChip";

type GalleryCardProps = {
  skill: Skill;
  index: number;
  badgeIndex?: number;
};

export function GalleryCard({ skill, index, badgeIndex }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.04, 0.4),
        duration: 0.36,
        ease: [0.2, 0.6, 0.2, 1],
      }}
      className="h-full"
    >
      <Link
        href={`/skills/${skill.slug}`}
        className={clsx(
          "group relative flex h-full flex-col overflow-hidden",
          "border border-[var(--color-line)] bg-[var(--color-surface)]",
          "transition-[transform,border-color,box-shadow] duration-200 ease-out",
          "hover:-translate-y-1 hover:border-[var(--color-ink)] hover:shadow-card-hover",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]",
        )}
      >
        {/* Cover with overlaid index + glyph */}
        <div className="relative">
          <Cover palette={skill.cover} height="md" />

          {/* Top-left index */}
          {typeof badgeIndex === "number" && (
            <div className="absolute left-3 top-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/65 mix-blend-multiply">
              · {badgeIndex.toString().padStart(2, "0")}
            </div>
          )}

          {/* Top-right glyph */}
          <div
            aria-hidden
            className="absolute right-3 top-3 font-serif text-[18px] leading-none italic text-[var(--color-ink)]/70 mix-blend-multiply"
          >
            {skill.glyph}
          </div>

          {/* Big serif initial bottom-left for graphic flair */}
          <div
            aria-hidden
            className="absolute -bottom-2 left-3 select-none font-serif text-[60px] italic leading-none tracking-[-0.05em] text-[var(--color-ink)]/15 mix-blend-multiply"
          >
            {skill.name.charAt(0)}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4">
          <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)] line-clamp-2">
            {skill.name}
          </h3>

          <p className="line-clamp-3 text-[13px] leading-[1.55] text-[var(--color-ink-muted)]">
            {skill.description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2">
            <div className="flex flex-wrap items-center gap-1">
              {skill.tags.slice(0, 2).map((tag) => (
                <PropertyChip key={tag.label} label={tag.label} color={tag.color} />
              ))}
            </div>
            <span
              className={clsx(
                "inline-flex shrink-0 items-center gap-1 text-[11px]",
                "text-[var(--color-ink-faint)] transition-all duration-200",
                "group-hover:text-[var(--color-ink)] group-hover:translate-x-0.5",
              )}
            >
              <span>読む</span>
              <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
