import { motion } from 'framer-motion'
import { Code2, Database, Globe, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind'] },
  { icon: Database, label: 'Backend', items: ['Node', 'FastAPI', 'tRPC', 'GraphQL'] },
  { icon: Globe, label: 'Cloud', items: ['Docker', 'Vercel', 'Netlify', 'Cloudflare'] },
  { icon: Rocket, label: 'Quality', items: ['TypeScript', 'Testing', 'Perf', 'Accessibility'] },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Blue Bolt</h2>
          <p className="mt-4 text-slate-300">
            I build end‑to‑end web apps that balance craft and velocity. From
            polished interfaces to robust APIs and data layers, I love shipping
            reliable experiences that feel effortless.
          </p>
          <p className="mt-3 text-slate-300">
            My approach: design with intent, automate the boring, measure what
            matters, and iterate fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {skills.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold">{s.label}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
