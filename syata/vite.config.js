import { defineConfig } from 'vite'

export default defineConfig({
    base: '/dist/',
    mode: 'production',
    build: {
        outDir: 'dist'
    }
})