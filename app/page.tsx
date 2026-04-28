"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  skills as allSkills,
  skillsByMain,
  MAIN_CATEGORY_LABEL,
  MAIN_CATEGORY_ORDER,
  SUB_CATEGORY_LABEL,
  SUB_CATEGORY_COLOR,
  SUB_ORDER,
} from "@/data/skills";
import type { MainCategory, Skill, SubCategory } from "@/data/skills";
import { GalleryCard } from "@/components/GalleryCard";
import { PropertyChip } from "@/components/PropertyChip";
import { SiteNav } from "@/components/SiteNav";

export default function HomePage() {
  const [tab, setTab] = useState<MainCategory>("general");

  const groups = useMemo(() => {
    const order = SUB_ORDER[tab];
    const result: { sub: SubCategory | null; items: Skill[] }[] = [];
    for (const sub of order) {
      const items = skillsByMain[tab].filter((s) => s.subCategory === sub);
      if (items.length > 0) result.push({ sub, items });
    }
    return result;
  }, [tab]);

  const totalInTab = skillsByMain[tab].length;

  return (
    <>
      <SiteNav />
      <main className="bg-[var(--color-page)]">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-24 pt-10 sm:px-10 sm:pt-12">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {MAIN_CATEGORY_ORDER.map((c) => {
              const active = tab === c;
              const count = skillsByMain[c].length;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setTab(c)}
                  className={clsx(
                    "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
                    active
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-page)]"
                      : "border-[var(--color-line)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface-hover)]",
                  )}
                >
                  <span>{MAIN_CATEGORY_LABEL[c]}</span>
                  <span
                    className={clsx(
                      "font-mono text-[10.5px] tabular-nums",
                      active
                        ? "text-[var(--color-page)]/60"
                        : "text-[var(--color-ink-faint)]",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-3 text-[11.5px] text-[var(--color-ink-faint)]">
            <span className="font-mono tabular-nums">
              {totalInTab.toString().padStart(2, "0")}
            </span>
            <span aria-hidden className="block h-px flex-1 bg-[var(--color-line-soft)]" />
            <span>{MAIN_CATEGORY_LABEL[tab]}</span>
          </div>

          <div className="mt-8 space-y-12">
            {groups.map(({ sub, items }, gi) => (
              <SubSection
                key={sub ?? "_flat"}
                sub={sub}
                items={items}
                offset={groups.slice(0, gi).reduce((n, g) => n + g.items.length, 0)}
              />
            ))}
          </div>
        </div>

        <footer className="border-t border-[var(--color-line-soft)]">
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-6 text-[12px] text-[var(--color-ink-faint)] sm:px-10">
            <span>© {new Date().getFullYear()} スキルライブラリ</span>
            <span className="font-mono">
              {allSkills.length} スキル · {MAIN_CATEGORY_ORDER.length} カテゴリ
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

function SubSection({
  sub,
  items,
  offset,
}: {
  sub: SubCategory | null;
  items: Skill[];
  offset: number;
}) {
  return (
    <section>
      {sub !== null && (
        <header className="mb-4 flex items-baseline gap-3">
          <PropertyChip
            label={SUB_CATEGORY_LABEL[sub]}
            color={SUB_CATEGORY_COLOR[sub]}
            size="md"
          />
          <span className="font-mono text-[10.5px] tabular-nums text-[var(--color-ink-faint)]">
            {items.length.toString().padStart(2, "0")}
          </span>
          <span aria-hidden className="block h-px flex-1 bg-[var(--color-line-soft)]" />
        </header>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((skill, i) => (
          <GalleryCard
            key={skill.slug}
            skill={skill}
            badgeIndex={offset + i + 1}
            priority={offset === 0 && i < 4}
          />
        ))}
      </div>
    </section>
  );
}
