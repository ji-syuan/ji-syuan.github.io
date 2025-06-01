import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';  // Astro 4 語法
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    output: 'hybrid',
    adapter: netlify(),
    trailingSlash: 'always',
    site: 'https://ji-syuan.github.io',
    base: '/',
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
    ]
});