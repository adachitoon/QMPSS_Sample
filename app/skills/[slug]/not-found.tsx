import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";

export default function SkillNotFound() {
  return (
    <>
      <SiteNav />
      <main className="bg-[var(--color-page)]">
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center px-6 py-32 text-center sm:py-40">
          <div className="font-serif text-[64px] italic leading-none text-[var(--color-ink-faint)]">
            404
          </div>
          <h1 className="mt-5 text-[28px] font-bold tracking-[-0.6px] text-[var(--color-ink)]">
            ページが見つかりません
          </h1>
          <p className="mt-3 max-w-prose text-[14px] text-[var(--color-ink-muted)]">
            指定されたスキルは存在しません。一覧から探し直してください。
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-1.5 rounded-[5px] border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-2 text-[13px] text-[var(--color-ink)] hover:bg-[var(--color-surface-hover)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            一覧に戻る
          </Link>
        </div>
      </main>
    </>
  );
}
