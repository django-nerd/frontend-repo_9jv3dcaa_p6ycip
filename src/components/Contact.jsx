import { useState } from 'react'
import { Card } from './Section'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <Card>
        <p className="text-green-700 font-medium">Terima kasih! Pesanmu sudah terkirim (simulasi).</p>
      </Card>
    )
  }

  return (
    <Card>
      <form onSubmit={onSubmit} className="grid gap-3">
        <div>
          <label className="text-sm font-medium">Nama</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 ring-indigo-500" placeholder="Nama lengkap" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 ring-indigo-500" placeholder="email@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Pesan</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 ring-indigo-500" placeholder="Tulis pesanmu di sini..." />
        </div>
        <button type="submit" className="mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Kirim</button>
      </form>
    </Card>
  )
}
