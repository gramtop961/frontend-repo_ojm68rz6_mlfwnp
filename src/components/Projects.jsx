import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'BoltBoard',
    desc: 'Realtime kanban with drag & drop, comments, and AI summaries.',
    stack: ['React', 'Zustand', 'FastAPI', 'MongoDB'],
    color: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'PulseCast',
    desc: 'Analytics dashboard with streaming charts and server sent events.',
    stack: ['Next.js', 'Tailwind', 'tRPC', 'Postgres'],
    color: 'from-purple-400/20 to-pink-400/20',
  },
  {
    title: 'CloudForge',
    desc: 'CLI + web UI to deploy containers to edge in seconds.',
    stack: ['Node', 'Docker', 'Cloudflare'],
    color: 'from-orange-400/20 to-amber-400/20',
  },
  {
    title: 'LumaShop',
    desc: 'Headless e‑commerce starter with payments and CMS.',
    stack: ['Remix', 'Stripe', 'Prisma'],
    color: 'from-blue-400/20 to-indigo-400/20',
  },
  {
    title: 'Nebula Chat',
    desc: 'End‑to‑end encrypted group chat with media and themes.',
    stack: ['React Native', 'WebRTC', 'Supabase'],
    color: 'from-teal-400/20 to-sky-400/20',
  },
  {
    title: 'AlgoSketch',
    desc: 'Visualize algorithms with interactive, teachable steps.',
    stack: ['Vite', 'D3.js', 'Typescript'],
    color: 'from-rose-400/20 to-fuchsia-400/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-300"
        >
          A taste of experiments and production builds engineered by Blue Bolt.
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 text-slate-200/80">
                  <button aria-label="Open">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                  <button aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-slate-900/40 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
