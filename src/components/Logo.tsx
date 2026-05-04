import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export const Logo = ({ className, showWordmark = true }: LogoProps) => (
  <div className={cn("flex items-center gap-2.5", className)} aria-label="Xerebrum">
    <div className="relative h-8 w-8">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent opacity-90" />
      <div className="absolute inset-[3px] rounded-[7px] bg-background flex items-center justify-center">
        <span className="font-display text-sm font-bold text-gradient-accent leading-none">X</span>
      </div>
      <div className="absolute -inset-1 rounded-xl bg-primary/30 blur-md -z-10" />
    </div>
    {showWordmark && (
      <span className="font-display text-lg font-semibold tracking-tight">
        Xerebrum
      </span>
    )}
  </div>
);
