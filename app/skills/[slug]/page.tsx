import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { skills, CATEGORY_LABEL } from "@/data/skills";
import type { Category } from "@/data/skills";
import { Cover } from "@/components/Cover";
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
    description: skill.description,
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
          {/* ヘッダー / ヒーロー */}
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

              <div className="mt-10 flex flex-wrap items-center gap-3 text-[12px] text-[var(--color-ink-muted)]">
                <span className="font-mono tabular-nums">
                  {(idx + 1).toString().padStart(2, "0")} /{" "}
                  {total.toString().padStart(2, "0")}
                </span>
                <span aria-hidden className="block h-px w-8 bg-[var(--color-line)]" />
                <span>{CATEGORY_LABEL[skill.category]}</span>
                <span aria-hidden className="block h-px w-8 bg-[var(--color-line)]" />
                <span>
                  <span className="font-mono tabular-nums">{skill.readMinutes}</span>
                  {" 分で読める"}
                </span>
              </div>

              <h1 className="mt-6 max-w-[18ch] text-[clamp(40px,7vw,84px)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
                {skill.name}
              </h1>

              <p className="mt-7 max-w-[60ch] text-[18px] leading-[1.7] text-[var(--color-ink-muted)]">
                {skill.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-1.5">
                {skill.tags.map((tag) => (
                  <PropertyChip key={tag.label} label={tag.label} color={tag.color} size="md" />
                ))}
              </div>
            </div>
          </section>

          {/* カバーバナー */}
          <div className="mx-auto w-full max-w-[1180px] px-6 pt-10 sm:px-10 sm:pt-14">
            <div className="relative">
              <Cover palette={skill.cover} height="lg" />
              <div className="absolute left-5 top-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/60 mix-blend-multiply">
                Cover · {skill.cover}
              </div>
            </div>
          </div>

          {/* 使うタイミング — プルクオート */}
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

          {/* 本文 */}
          <div className="mx-auto w-full max-w-[760px] px-6 pb-20 pt-14 sm:px-10 sm:pb-32">
            <div className="peek-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{skill.body}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* 前 / 次 ナビ */}
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

function NextPrevLink({
  direction,
  skill,
}: {
  direction: "prev" | "next";
  skill: { slug: string; name: string; category: Category };
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
      <span className="text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-[var(--color-page)] sm:text-[36px]">
        {skill.name}
      </span>
      <span className="text-[11.5px] text-white/45">
        {CATEGORY_LABEL[skill.category]}
      </span>
    </Link>
  );
}
