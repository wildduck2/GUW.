import { defineConfig } from 'vite'
import ViteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html',
                works: './works.html',
                credits: './credits.html',
                contact: './contact.html'
            }
        }
    },
    plugins: [
        ViteImagemin({
            gifsicle: { optimizationLevel: 3 },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 80, progressive: true },
            pngquant: { quality: [0.7, 0.9], speed: 4 },
            svgo: { plugins: [{ removeViewBox: false }] }
        })
    ]
})
