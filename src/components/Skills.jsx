import { Card } from './Section'
import { Code, Palette, Rocket, Smartphone } from 'lucide-react'

const skills = [
  { icon: Code, title: 'Pemrograman Dasar', desc: 'Mengerti dasar HTML, CSS, dan JavaScript untuk membangun website sederhana.' },
  { icon: Palette, title: 'Desain UI', desc: 'Memahami prinsip tata letak, warna, dan tipografi untuk antarmuka yang rapi.' },
  { icon: Smartphone, title: 'Responsif', desc: 'Membuat tampilan yang nyaman di HP maupun desktop.' },
  { icon: Rocket, title: 'Rasa Ingin Tahu', desc: 'Selalu siap mempelajari teknologi baru dan mengembangkan kemampuan.' },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((s, i) => (
        <Card key={i}>
          <div className="flex flex-col items-start gap-3">
            <div className="h-11 w-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <s.icon size={22} />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
