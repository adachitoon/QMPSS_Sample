"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  skills as allSkills,
  allCategories,
  CATEGORY_LABEL,
} from "@/data/skills";
import type { Category, Skill } from "@/data/skills";
import { GalleryCard } from "@/components/GalleryCard";
import { SiteNav } from "@/components/SiteNav";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...allCategories];

const FILTER_LABEL: Record<Filter, string> = {
  All: "すべて",
  Planning: CATEGORY_LABEL.Planning,
  Engineering: CATEGORY_LABEL.Engineering,
  Design: CATEGORY_LABEL.Design,
  Workflow: CATEGORY_LABEL.Workflow,
};

export default function HomePage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo<Skill[]>(() => {
    if (filter === "All") return allSkills;
    return allSkills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <>
      <SiteNav />
      <main className="bg-[var(--color-page)]">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-24 pt-10 sm:px-10 sm:pt-12">
          {/* カテゴリフィルタ */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              const count =
                f === "All"
                  ? allSkills.length
                  : allSkills.filter((s) => s.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={clsx(
                    "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
                    active
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-page)]"
                      : "border-[var(--color-line)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface-hover)]",
                  )}
                >
                  <span>{FILTER_LABEL[f]}</span>
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

          {/* カードグリッド */}
          {filtered.length === 0 ? (
            <EmptyState onReset={() => setFilter("All")} />
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((skill, i) => (
                <GalleryCard
                  key={skill.slug}
                  skill={skill}
                  index={i}
                  badgeIndex={i + 1}
                />
              ))}
            </div>
          )}
        </div>

        {/* フッター */}
        <footer className="border-t border-[var(--color-line-soft)]">
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-6 text-[12px] text-[var(--color-ink-faint)] sm:px-10">
            <span>© {new Date().getFullYear()} スキルライブラリ</span>
            <span className="font-mono">
              {allSkills.length} スキル · {allCategories.length} カテゴリ
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="my-16 flex flex-col items-center justify-center border border-dashed border-[var(--color-line)] py-16 text-center">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
        該当なし
      </div>
      <p className="mt-3 max-w-md text-[14px] text-[var(--color-ink-muted)]">
        このカテゴリにはまだスキルがありません。
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 text-[13px] text-[var(--color-page)]"
      >
        すべて表示
      </button>
    </div>
  );
}
