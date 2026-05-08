/**
 * MotionLayer — constant ambient motion for sections.
 * Layered streaming dots and sweeping lines at different speeds.
 * Pointer-events disabled, masked to the edges so it never competes with content.
 */
type Variant = "dots" | "lines" | "mixed" | "subtle";

export const MotionLayer = ({ variant = "mixed", className = "" }: { variant?: Variant; className?: string }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {(variant === "dots" || variant === "mixed" || variant === "subtle") && (
        <div className="absolute inset-0 stream-dots opacity-[0.18] mask-fade-edges" />
      )}
      {(variant === "mixed" || variant === "dots") && (
        <div className="absolute inset-0 stream-dots-slow opacity-[0.14] mask-fade-edges" />
      )}
      {(variant === "lines" || variant === "mixed") && (
        <div className="absolute inset-0 stream-lines opacity-60 mask-fade-edges" />
      )}
      {variant === "mixed" && (
        <div className="absolute inset-0 stream-lines-slow opacity-50 mask-fade-edges" />
      )}
      {(variant === "mixed" || variant === "lines") && (
        <div className="absolute inset-0 light-sweep mix-blend-screen" />
      )}
      {variant === "subtle" && (
        <div className="absolute inset-0 light-sweep mix-blend-screen" />
      )}
    </div>
  );
};
