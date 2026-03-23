import { motion, useReducedMotion } from "framer-motion";

import { useMobileLayout } from "@/hooks/useMobileLayout";
import { cn } from "@/lib/utils";
import type { RevealProps } from "@/interfaces/componentes";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const mobile = useMobileLayout();

  if (reduceMotion || mobile) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
