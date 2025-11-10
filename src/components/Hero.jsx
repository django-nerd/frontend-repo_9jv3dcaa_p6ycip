import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 -right-10 h-96 w-96 rounded-full bg-pink-400 blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-10 h-96 w-96 rounded-full bg-indigo-500 blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium text-indigo-600 tracking-wider">PORTOFOLIO</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            Halo, saya <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Andra Lutfi Ridhotullah</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Saya berusia 17 tahun (21 Juni 2008) dan saat ini sedang menempuh pendidikan di SMAN 28 Kabupaten Tangerang. Saya tertarik pada dunia teknologi, desain antarmuka, dan pengembangan web.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#proyek" className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 transition-all">Lihat Proyek</a>
            <a href="#kontak" className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">Kontak Saya</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-pink-500 p-[2px] shadow-2xl">
            <div className="h-full w-full rounded-3xl bg-white flex items-center justify-center">
              <motion.div
                className="h-48 w-48 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center text-4xl font-extrabold"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 4, duration: 6 }}
              >
                ALR
              </motion.div>
            </div>
          </div>
          <motion.div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl border p-4 shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold">Pelajar • SMAN 28 Kab. Tangerang</p>
            <p className="text-xs text-gray-600">Berfokus pada desain dan pengembangan web</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
