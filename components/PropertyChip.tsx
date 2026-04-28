import clsx from "clsx";
import type { TagColor } from "@/data/skills";

const COLOR_CLASSES: Record<TagColor, string> = {
  gray: "bg-[var(--color-tag-gray-bg)] text-[var(--color-tag-gray-text)]",
  brown: "bg-[var(--color-tag-brown-bg)] text-[var(--color-tag-brown-text)]",
  orange: "bg-[var(--color-tag-orange-bg)] text-[var(--color-tag-orange-text)]",
  yellow: "bg-[var(--color-tag-yellow-bg)] text-[var(--color-tag-yellow-text)]",
  green: "bg-[var(--color-tag-green-bg)] text-[var(--color-tag-green-text)]",
  blue: "bg-[var(--color-tag-blue-bg)] text-[var(--color-tag-blue-text)]",
  purple: "bg-[var(--color-tag-purple-bg)] text-[var(--color-tag-purple-text)]",
  pink: "bg-[var(--color-tag-pink-bg)] text-[var(--color-tag-pink-text)]",
  red: "bg-[var(--color-tag-red-bg)] text-[var(--color-tag-red-text)]",
};

type PropertyChipProps = {
  label: string;
  color?: TagColor;
  size?: "sm" | "md";
  className?: string;
  active?: boolean;
  as?: "span" | "button";
  onClick?: () => void;
};

export function PropertyChip({
  label,
  color = "gray",
  size = "sm",
  className,
  active,
  as = "span",
  onClick,
}: PropertyChipProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      onClick={onClick}
      className={clsx(
        "inline-flex items-center rounded-[3px] font-medium leading-none whitespace-nowrap transition-colors",
        size === "sm" ? "px-1.5 py-0.5 text-[11px]" : "px-2 py-1 text-[12px]",
        COLOR_CLASSES[color],
        active && "ring-1 ring-[var(--color-ink)]/40 ring-offset-1 ring-offset-[var(--color-page)]",
        as === "button" && "cursor-pointer hover:brightness-95 dark:hover:brightness-110",
        className,
      )}
    >
      {label}
    </Component>
  );
}
