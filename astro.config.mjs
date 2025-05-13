import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
    output: 'static',
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
                    // collapseInlineTagWhitespace: true, // It breaks display-inline / flex-inline text
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    // removeEmptyElements: true, // It removes sometimes SVGs
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
    // server: {
    //     port: 4321, // 可以嘗試更改端口號
    //     host: true, // 監聽所有網絡接口，而不僅僅是 localhost
    //   },
});