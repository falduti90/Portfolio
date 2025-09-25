// Minimal echo worker for AI chat placeholder
export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return new Response('Use POST', { status: 405 })
    }
    const { messages } = await request.json().catch(()=>({messages:[]}))
    const last = messages && messages.length ? messages[messages.length - 1].content : ''
    const reply = `Recibí: "${last}". Aún no hay modelo conectado.`
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}