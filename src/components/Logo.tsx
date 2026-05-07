import { cn } from "@/lib/utils";
import logoHorizontal from "@/assets/logo-horizontal.svg";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export const Logo = ({ className }: LogoProps) => (
  <img
    src={logoHorizontal}
    alt="Xerebrum"
    className={cn("h-8 w-auto select-none", className)}
    draggable={false}
  />
);
