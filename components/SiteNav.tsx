import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[var(--color-line-soft)] bg-[var(--color-page)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          aria-label="トップへ"
          className="inline-flex items-baseline gap-2 text-[var(--color-ink)]"
        >
          <span className="text-[15px] font-semibold tracking-[-0.2px]">
            スキルライブラリ
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
