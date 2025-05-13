import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',  // 改為 server 模式
    trailingSlash: 'always',
    site: 'https://ji-syuan.github.io',
    base: '/',

    // Single page, no prefetch needed
    prefetch: false,

    integrations: [
        tailwind(),
        sitemap(),
        compress({
            CSS: true,
            SVG: false,
            Image: false,
            HTML: {
                "html-minifier-terser": {
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true
                },
            },
            JavaScript: {
                'terser': {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    }
                }
            }
        })
    ],
    adapter: node({
        mode: 'standalone'
    }),
    server: {
        port: 4321,
        host: true,
    },
});