import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5",
        accent:
          "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground hover:shadow-[0_0_40px_hsl(var(--accent)/0.5)] hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        ghost: "text-foreground hover:bg-secondary",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaVariants> {
  asChild?: boolean;
}

export const CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(ctaVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
CtaButton.displayName = "CtaButton";
