import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedCard({ children, delay = 0, style = {} }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%', ...style }}
    >
      {children}
    </motion.div>
  )
}