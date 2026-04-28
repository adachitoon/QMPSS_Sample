import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  skills,
  MAIN_CATEGORY_LABEL,
  MAIN_CATEGORY_COLOR,
  SUB_CATEGORY_LABEL,
  SUB_CATEGORY_COLOR,
} from "@/data/skills";
import type { MainCategory, Skill } from "@/data/skills";
import { PropertyChip } from "@/components/PropertyChip";
import { SiteNav } from "@/components/SiteNav";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) return { title: "ページが見つかりません" };
  return {
    title: `${skill.name} — スキルライブラリ`,
    description: skill.description ?? `${skill.name}のリファレンスページ。`,
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) notFound();

  const idx = skills.findIndex((s) => s.slug === skill.slug);
  const total = skills.length;
  const prev = idx > 0 ? skills[idx - 1] : null;
  const next = idx < skills.length - 1 ? skills[idx + 1] : null;

  return (
    <>
      <SiteNav />
      <main className="bg-[var(--color-page)]">
        <article>
          <section className="relative overflow-hidden border-b border-[var(--color-line-soft)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[clamp(180px,24vw,360px)] font-medium italic leading-[0.85] tracking-[-0.06em] text-transparent"
              style={{ WebkitTextStroke: "1px var(--color-line-soft)" }}
            >
              {(idx + 1).toString().padStart(2, "0")}
            </div>

            <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <ArrowLeft className="h-3 w-3" strokeWidth={2} />
                <span>一覧に戻る</span>
              </Link>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                <PropertyChip
                  label={MAIN_CATEGORY_LABEL[skill.mainCategory]}
                  color={MAIN_CATEGORY_COLOR[skill.mainCategory]}
                  size="md"
                />
                {skill.subCategory && (
                  <>
                    <span className="text-[var(--color-ink-faint)]">›</span>
                    <PropertyChip
                      label={SUB_CATEGORY_LABEL[skill.subCategory]}
                      color={SUB_CATEGORY_COLOR[skill.subCategory]}
                      size="md"
                    />
                  </>
                )}
                <span aria-hidden className="block h-px w-6 bg-[var(--color-line)]" />
                <span className="font-mono text-[12px] tabular-nums text-[var(--color-ink-muted)]">
                  {(idx + 1).toString().padStart(2, "0")} /{" "}
                  {total.toString().padStart(2, "0")}
                </span>
              </div>

              <h1 className="mt-6 max-w-[20ch] text-[clamp(36px,6vw,72px)] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--color-ink)]">
                {skill.name}
              </h1>

              {skill.description && (
                <p className="mt-7 max-w-[60ch] text-[18px] leading-[1.7] text-[var(--color-ink-muted)]">
                  {skill.description}
                </p>
              )}
            </div>
          </section>

          {skill.whenToUse && (
            <div className="mx-auto w-full max-w-[920px] px-6 pt-16 sm:px-10 sm:pt-20">
              <div className="grid gap-3 border-t border-b border-[var(--color-line)] py-10 sm:grid-cols-[160px_1fr] sm:gap-10 sm:py-14">
                <div className="text-[12px] tracking-[0.06em] text-[var(--color-ink-muted)]">
                  使うタイミング
                </div>
                <blockquote className="text-[clamp(20px,2.6vw,28px)] font-medium leading-[1.55] tracking-[-0.01em] text-[var(--color-ink)]">
                  <span className="font-serif italic font-normal">「</span>
                  {skill.whenToUse}
                  <span className="font-serif italic font-normal">」</span>
                </blockquote>
              </div>
            </div>
          )}

          <div className="mx-auto w-full max-w-[760px] px-6 pb-20 pt-14 sm:px-10 sm:pb-32">
            {skill.body ? (
              <div className="peek-prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{skill.body}</ReactMarkdown>
              </div>
            ) : (
              <ComingSoon />
            )}
          </div>
        </article>

        <nav className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-page)]">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-10">
            {prev ? (
              <NextPrevLink direction="prev" skill={prev} />
            ) : (
              <span className="hidden sm:block" />
            )}
            {next && <NextPrevLink direction="next" skill={next} />}
          </div>
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-5 text-[11.5px] text-white/55 sm:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-page)]"
            >
              <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
              <span>一覧に戻る</span>
            </Link>
            <span className="font-mono tabular-nums">
              {(idx + 1).toString().padStart(2, "0")} /{" "}
              {total.toString().padStart(2, "0")}
            </span>
          </div>
        </nav>
      </main>
    </>
  );
}

function ComingSoon() {
  return (
    <div className="flex flex-col items-start gap-4 border border-dashed border-[var(--color-line)] px-6 py-10 sm:px-8 sm:py-12">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-faint)]">
        Coming Soon
      </span>
      <p className="max-w-[52ch] text-[15px] leading-[1.7] text-[var(--color-ink-muted)]">
        このスキルの中身（説明・使うタイミング・本文）はこれから書き起こします。
        ナレッジが固まったら、こちらのページにそのまま追加されます。
      </p>
    </div>
  );
}

function NextPrevLink({
  direction,
  skill,
}: {
  direction: "prev" | "next";
  skill: Pick<Skill, "slug" | "name" | "mainCategory" | "subCategory">;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className={`group flex flex-col gap-3 px-2 py-10 sm:px-8 sm:py-14 ${
        isNext ? "items-end text-right" : "items-start text-left"
      } transition-colors hover:bg-white/5`}
    >
      <span className="inline-flex items-center gap-1.5 text-[11.5px] text-white/55">
        {!isNext && <ArrowLeft className="h-3 w-3" strokeWidth={2} />}
        {isNext ? "次へ" : "前へ"}
        {isNext && <ArrowRight className="h-3 w-3" strokeWidth={2} />}
      </span>
      <span className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--color-page)] sm:text-[30px]">
        {skill.name}
      </span>
      <span className="text-[11.5px] text-white/45">
        {MAIN_CATEGORY_LABEL[skill.mainCategory as MainCategory]}
        {skill.subCategory ? ` · ${SUB_CATEGORY_LABEL[skill.subCategory]}` : ""}
      </span>
    </Link>
  );
}
