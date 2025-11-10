import { Card } from './Section'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Website Portofolio Modern',
    desc: 'Contoh portofolio dengan animasi halus, warna gradien, dan desain responsif.',
    link: '#',
  },
  {
    title: 'Landing Page Sekolah',
    desc: 'Tampilan informatif dengan struktur rapi dan mudah dipelajari.',
    link: '#',
  },
  {
    title: 'UI Komponen',
    desc: 'Kumpulan komponen UI kecil seperti kartu, tombol, dan navigasi.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projects.map((p, i) => (
        <Card key={i}>
          <div className="flex flex-col gap-3 h-full">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-pink-200" />
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 flex-1">{p.desc}</p>
            <a className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline" href={p.link}>
              Lihat Proyek <ExternalLink size={16} />
            </a>
          </div>
        </Card>
      ))}
    </div>
  )
}
