import { useState, useRef } from 'react'

export default function Contact() {
  const [state, setState] = useState({ sending: false, ok: false, error: '' })
  const formRef = useRef()
  const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

  // Función para descargar el CV - CORREGIDA para Dropbox
  const downloadCV = () => {
    // URL de Dropbox para descarga directa (cambiamos dl=0 por dl=1)
    const dropboxUrl = 'https://www.dropbox.com/scl/fi/bwg7itbs8lmqvhiwfjreo/CV_ATS_MF.pdf?rlkey=lhhz9ipg1dof70pcqyfzmwv52&st=u4ac8150&dl=1'
    
    // Abrir en nueva pestaña para descarga
    window.open(dropboxUrl, '_blank', 'noopener,noreferrer')
  }

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
        formRef.current.reset()
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
      
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Contacto directo por WhatsApp</p>
          <a 
            href="https://wa.me/5491131292991"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
          >
            <span>💬</span>
            WhatsApp
          </a>
        </div>
        
        <div>
          <p className="text-sm text-gray-600 mb-2">Descargar mi CV ATS</p>
          <button 
            onClick={downloadCV}
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
          >
            <span>📄</span>
            Descargar CV ATS
          </button>
        </div>
      </div>
    </section>
  )
}