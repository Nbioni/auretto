'use client'

import { tv, VariantProps } from 'tailwind-variants'
import { motion, MotionProps, useInView } from 'framer-motion';
import { ComponentProps, useRef } from 'react';
import { useResponsive } from '@/hooks/responsive';

export type InViewAnimationProps = ComponentProps<'div'> & {
  className?: string
  animate?: boolean
  delay?: string
  duration?: string
  once?: boolean
}

export default function InViewAnimation(props: InViewAnimationProps) {
  const { className, animate, children, delay, duration, once, ...rest } = props;
  const { isDesktopOrLaptop } = useResponsive()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once ?? false });
  return (
    <div ref={ref} >
      <div
        className={className}
        style={{
          transition: `all ${duration ?? '0.7s'} cubic-bezier(0.17, 0.55, 0.55, 1) ${delay ?? '0.21s'}`,
          transform: isInView ? "none" : isDesktopOrLaptop ? "translateY(200px)" : "translateY(144px)",
          opacity: isInView && (animate === undefined || animate === true) ? 1 : 0,
        }}
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}