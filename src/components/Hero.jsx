import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene - keep on base layer, full size, no negative z-index */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient for legibility; never blocks interactions with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />

      {/* Content container uses pointer-events-none so the 3D scene stays clickable.
          Re-enable pointer events only on interactive UI elements. */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-white backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Now open for collaborations
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.05 }}
          className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          style={{ willChange: 'transform, opacity' }}
        >
          nfrnd <span className="text-emerald-400">Blue Bolt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 20, delay: 0.12 }}
          className="mt-4 max-w-2xl text-balance text-lg text-slate-200/90 md:text-xl"
          style={{ willChange: 'transform, opacity' }}
        >
          Full‑stack web developer crafting modern, fast, and delightful products.
          Bringing ideas to life with TypeScript, React, Node, and cloud‑native magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 20, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ willChange: 'transform, opacity' }}
        >
          <a
            href="#projects"
            className="pointer-events-auto group rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 font-medium text-emerald-300 transition hover:bg-emerald-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pointer-events-auto group rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
