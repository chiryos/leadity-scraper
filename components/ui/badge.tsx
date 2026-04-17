import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]",
        className,
      )}
      {...props}
    />
  );
}
