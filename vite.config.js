import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        selecao: 'src/selecao-recurso.html',
        dissertativa: 'src/recursos-dissertativa.html',
        gabarito: 'src/recursos-gabarito.html',
        resultadoDiscursiva: 'src/recursos-resultado-discursiva.html',
        cpnu: 'src/_recursos-cpnu.html'
      }
    }
  },
  optimizeDeps: {
    include: ['@tailwindplus/elements']
  }
})
