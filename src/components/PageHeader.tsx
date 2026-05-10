import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { MotionLayer } from "./MotionLayer";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt?: string;
}

export const PageHeader = ({ eyebrow, title, description, image, imageAlt = "" }: PageHeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-32 lg:pb-20 min-h-[60vh] flex items-center">
      <motion.div
        style={{ y: yBg, scale: scaleBg, backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
        className="absolute inset-0 -top-16 -bottom-16 bg-cover bg-right will-change-transform mask-fade-edges"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" aria-hidden />
      <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
      <MotionLayer variant="mixed" />

      <div className="container-x relative max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5 inline-flex"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient leading-[1.08] pb-2"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" aria-hidden />
    </section>
  );
};
