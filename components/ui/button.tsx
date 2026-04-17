"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]",
        gradient:
          "bg-brand-gradient text-white shadow-[0_8px_24px_-8px_rgba(27,134,255,0.55)] hover:shadow-[0_10px_30px_-6px_rgba(27,134,255,0.7)] hover:brightness-105",
        ghost:
          "border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)]",
        muted:
          "bg-[var(--color-surface-muted)] text-[var(--color-accent)] hover:bg-[var(--color-border)]",
        link: "text-[var(--color-accent)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-10 px-5 text-sm rounded-full",
        lg: "h-12 px-6 text-[15px] rounded-full",
        block: "h-12 w-full text-[15px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
