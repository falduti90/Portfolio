import { useEffect, useRef, useState } from 'react'

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{role:'assistant', content:'¡Hola! Soy tu asistente. Preguntame sobre mi experiencia o proyectos.'}])
  const [input, setInput] = useState('')
  const endpoint = import.meta.env.VITE_AI_ENDPOINT

  const send = async () => {
    const text = input.trim()
    if (!text) return
    setMsgs(m => [...m, {role:'user', content:text}])
    setInput('')
    if (!endpoint) {
      setMsgs(m => [...m, {role:'assistant', content:'(Demo) Configurá VITE_AI_ENDPOINT para respuestas reales. Por ahora, eco: ' + text}])
      return
    }
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: text }] })
      })
      const j = await res.json()
      setMsgs(m => [...m, {role:'assistant', content: j.reply || '(sin respuesta)'}])
    } catch (e) {
      setMsgs(m => [...m, {role:'assistant', content: 'Error de IA: ' + String(e)}])
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="w-80 h-96 rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl flex flex-col overflow-hidden mb-3">
          <div className="px-4 py-2 border-b border-neutral-800 text-sm">Asistente IA</div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
                <div className={"inline-block max-w-[80%] rounded-2xl px-3 py-2 text-sm " + (m.role==='user' ? 'bg-white text-black' : 'bg-neutral-900 border border-neutral-800')}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-neutral-800 flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Preguntá algo..." className="flex-1 rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none"/>
            <button onClick={send} className="px-3 py-2 rounded-xl bg-white text-black text-sm">Enviar</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(o=>!o)} className="px-4 py-2 rounded-xl bg-white text-black font-medium shadow-xl">
        {open ? 'Cerrar IA' : 'Abrir IA'}
      </button>
    </div>
  )
}