import { Card } from './Section'

const items = [
  {
    title: 'SMAN 28 Kabupaten Tangerang',
    period: '2023 - Sekarang',
    desc: 'Program studi SMA. Aktif dalam kegiatan teknologi dan pengembangan diri.',
  },
  {
    title: 'SMP',
    period: '2019 - 2022',
    desc: 'Mulai tertarik dengan komputer, desain, dan internet.',
  },
]

export default function Timeline() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <Card key={i}>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center font-bold">{i + 1}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-indigo-600 font-medium">{item.period}</p>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
