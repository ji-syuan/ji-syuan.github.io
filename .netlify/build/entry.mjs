import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CoeOY7YW.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/news/_id_.astro.mjs');
const _page4 = () => import('./pages/news.astro.mjs');
const _page5 = () => import('./pages/products/_id_.astro.mjs');
const _page6 = () => import('./pages/products.astro.mjs');
const _page7 = () => import('./pages/services/_id_.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/news/[id].astro", _page3],
    ["src/pages/news/index.astro", _page4],
    ["src/pages/products/[id].astro", _page5],
    ["src/pages/products/index.astro", _page6],
    ["src/pages/services/[id].astro", _page7],
    ["src/pages/services/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1ee24235-a8b8-4ab9-b507-f41dda4b1d75"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
