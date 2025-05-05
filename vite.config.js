import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "styles.css"  : "/src/styles.css",
      "pages"       : "/src/pages",
      "json"        : "/src/assets/json",
      "components"  : "/src/components",
      "assets"      : "/src/assets",
    }
  }
})
