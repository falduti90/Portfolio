# Portfolio Awesome (React + Vite + Tailwind)

MVP para construir juntos un portfolio **copado** con:
- Experiencias laborales (timeline animado)
- Proyectos
- Galería con fotos
- Contacto con envío de email (Formspree)
- Caja de chat de IA (placeholder) lista para conectar a un endpoint

## Desarrollo local
```bash
npm i
npm run dev
```

## Publicar en GitHub Pages
1) Crear repo y hacer push a `main`.
2) Settings → Pages → **Source: GitHub Actions**.
3) El workflow despliega automáticamente (`.github/workflows/deploy.yml`).

## Configurar Formspree
- Creá un formulario en https://formspree.io y obtené tu `FORM_ID`.
- Agregá en `.env`:
  ```
  VITE_FORMSPREE_ID=tu_form_id
  ```
- Si no lo definís, el formulario mostrará un aviso.

## IA (endpoint opcional)
- La caja de chat usa `VITE_AI_ENDPOINT` (por ej. un Cloudflare Worker, Vercel Serverless, etc.).
- Por defecto incluimos un **Worker de ejemplo** que responde eco. Podés desplegarlo y pegar la URL.
  ```
  VITE_AI_ENDPOINT=https://tu-worker.example.workers.dev
  ```