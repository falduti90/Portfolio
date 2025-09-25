import { useState, useRef } from 'react'

export default function Contact() {
  const [state, setState] = useState({ sending: false, ok: false, error: '' })
  const formRef = useRef()
  const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!FORM_ID) { 
      setState(s => ({...s, error: 'Falta configurar VITE_FORMSPREE_ID en .env'}))
      return 
    }
    
    setState({ sending: true, ok: false, error: '' })
    const data = new FormData(e.target)

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })

      if (res.ok) {
        formRef.current.reset() // ✅ Usamos la referencia aquí
        setState({ sending: false, ok: true, error: '' })
        setTimeout(() => setState(s => ({ ...s, ok: false })), 5000)
      } else {
        const j = await res.json().catch(() => ({}))
        setState({ sending: false, ok: false, error: j.error || 'No se pudo enviar' })
      }
    } catch (err) {
      setState({ sending: false, ok: false, error: String(err) })
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12 border-t border-neutral-900">
      <h2 className="text-xl font-semibold">Contacto</h2>
      
      <form 
        ref={formRef}
        onSubmit={onSubmit} 
        className="mt-4 grid md:grid-cols-2 gap-4"
      >
        <input 
          name="name" 
          placeholder="Tu nombre" 
          required 
          className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-neutral-600" 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Tu email" 
          required 
          className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-neutral-600" 
        />
        <input 
          name="subject" 
          placeholder="Asunto" 
          className="md:col-span-2 rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-neutral-600" 
        />
        <textarea 
          name="message" 
          placeholder="Tu mensaje" 
          rows="5" 
          required 
          className="md:col-span-2 rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:border-neutral-600"
        ></textarea>
        
        <button 
          disabled={state.sending} 
          className="md:col-span-2 px-4 py-3 rounded-xl bg-white text-black font-medium shadow-xl hover:shadow-2xl transition disabled:opacity-60"
        >
          {state.sending ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        
        {state.ok && (
          <p className="md:col-span-2 text-green-400 text-sm">
            ¡Mensaje enviado! Te respondo pronto.
          </p>
        )}
        {state.error && (
          <p className="md:col-span-2 text-red-400 text-sm">
            {state.error}
          </p>
        )}
      </form>
      
      <p className="text-xs text-neutral-500 mt-2">
        Si preferís, WhatsApp: 
        <a className="underline" href="https://wa.me/5491131292991">
          Contame Por WhatSapp
        </a>
      </p>
    </section>
  )
}