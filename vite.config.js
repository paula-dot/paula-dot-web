import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production'
    return {
        base: isProd ? '/' : '/',
        publicDir: 'public',
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        build: {
            sourcemap: isProd,
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            if (id.includes('vue') || id.includes('react')) return 'vendor_framework'
                            if (id.match(/node_modules\/(lodash|date-fns|axios)/)) return 'vendor_common'
                            return 'vendor'
                        }
                    },
                },
            },
        },
        plugins: [
            visualizer({ filename: 'dist/bundle-visualizer.html', open: false }),
            VitePWA({
                registerType: 'autoUpdate',
                includeAssets: ['favicon.svg', 'robots.txt'],
                manifest: {
                    name: 'My App',
                    short_name: 'App',
                    start_url: '/',
                    display: 'standalone',
                    background_color: '#ffffff',
                    icons: [],
                },
            }),
        ],
    }
})