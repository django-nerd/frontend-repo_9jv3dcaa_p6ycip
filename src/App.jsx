import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section } from './components/Section'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Andra Lutfi Ridhotullah. Semua hak dilindungi.</p>
        <p>Dibuat dengan cinta, animasi halus, dan Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-pink-50/40 text-gray-900">
      <Navbar />
      <Hero />

      <Section id="tentang" title="Tentang Saya" subtitle="Perkenalan singkat tentang Andra.">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              Saya Andra Lutfi Ridhotullah, pelajar berusia 17 tahun yang antusias dalam dunia teknologi
              dan kreativitas digital. Saya senang belajar hal baru terutama seputar pengembangan web dan
              desain antarmuka. Saya percaya kombinasi rasa ingin tahu dan konsistensi adalah kunci untuk
              berkembang.
            </p>
            <ul className="mt-4 list-disc pl-5 text-gray-700">
              <li>Tanggal lahir: 21 Juni 2008</li>
              <li>Pendidikan: SMAN 28 Kabupaten Tangerang</li>
              <li>Minat: Web development, desain UI/UX, animasi</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm">
            <h3 className="font-semibold">Info Singkat</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="p-3 rounded-lg bg-indigo-50">
                <p className="text-indigo-700 font-semibold">17+</p>
                <p className="text-gray-600">Usia</p>
              </div>
              <div className="p-3 rounded-lg bg-pink-50">
                <p className="text-pink-700 font-semibold">Pelajar</p>
                <p className="text-gray-600">Status</p>
              </div>
              <div className="p-3 rounded-lg bg-fuchsia-50">
                <p className="text-fuchsia-700 font-semibold">UI • Web</p>
                <p className="text-gray-600">Fokus</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <p className="text-blue-700 font-semibold">Tangerang</p>
                <p className="text-gray-600">Domisili</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pendidikan" title="Pendidikan" subtitle="Perjalanan sekolah dan kegiatan yang diikuti.">
        <Timeline />
      </Section>

      <Section id="keahlian" title="Keahlian" subtitle="Kombinasi teknis dan soft skill.">
        <Skills />
      </Section>

      <Section id="proyek" title="Proyek" subtitle="Beberapa karya sederhana yang pernah dibuat.">
        <Projects />
      </Section>

      <Section id="kontak" title="Kontak" subtitle="Ingin berdiskusi atau bekerja sama? Kirimkan pesan.">
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}
