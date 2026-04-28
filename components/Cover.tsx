import clsx from "clsx";
import type { CoverPalette } from "@/data/skills";

const GRADIENTS: Record<CoverPalette, { from: string; via?: string; to: string }> = {
  "amber-rose":     { from: "#FEF3C7", via: "#FED7AA", to: "#FECACA" },
  "teal-sky":       { from: "#CCFBF1", via: "#CFFAFE", to: "#DBEAFE" },
  "violet-pink":    { from: "#EDE9FE", via: "#F3E8FF", to: "#FCE7F3" },
  "emerald-teal":   { from: "#DCFCE7", via: "#D1FAE5", to: "#CCFBF1" },
  "stone-gray":     { from: "#F5F5F4", via: "#EEEDEB", to: "#E7E5E4" },
  "orange-rose":    { from: "#FFEDD5", via: "#FFE4D5", to: "#FFE4E6" },
  "sky-violet":     { from: "#DBEAFE", via: "#E0E7FF", to: "#EDE9FE" },
  "fuchsia-orange": { from: "#FCE7F3", via: "#FFE4E6", to: "#FFEDD5" },
  "amber-emerald":  { from: "#FEF3C7", via: "#ECFCCB", to: "#DCFCE7" },
};

type CoverProps = {
  palette: CoverPalette;
  height?: "sm" | "md" | "lg";
  className?: string;
};

export function Cover({ palette, height = "md", className }: CoverProps) {
  const g = GRADIENTS[palette];
  const heightClass = height === "sm" ? "h-24" : height === "lg" ? "h-44" : "h-28";

  return (
    <div
      className={clsx("relative w-full shrink-0 overflow-hidden", heightClass, className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${g.from} 0%, ${g.via ?? g.from} 50%, ${g.to} 100%)`,
      }}
      aria-hidden
    />
  );
}
