import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/__REPO_NAME__/' : '/', // local '/', GitHub Pages '/repo/'
})
