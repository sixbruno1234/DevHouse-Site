'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  from?: 'left' | 'right';
  className?: string;
}

export default function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  from = 'left',
  className = '',
}: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
