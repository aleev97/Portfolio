import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "exploring";
}

const variants = {
  default: "border-line bg-panel-2",
  exploring: "border-alert/40 border-dashed",
};

export function Chip({ children, variant = "default" }: ChipProps) {
  return (
    <span
      className={`rounded-md border px-3 py-1 font-mono text-sm ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
