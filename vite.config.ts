import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const pages = ['/', '/about', '/faq', '/contact'] as const

function seoFiles(site: string): Plugin {
  const origin = site.replace(/\/$/, '')
  return {
    name: 'seo-files',
    generateBundle() {
      const urls = pages
        .map(
          (path) =>
            `  <url>\n    <loc>${origin}${path === '/' ? '/' : path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
        )
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\nDisallow: /catalog.html\nDisallow: /diwali-card-print.html\nDisallow: /diwali-card-a6.pdf\n\nSitemap: ${origin}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const site = env.VITE_SITE_URL || 'https://www.giftsnpresents.com'
  return {
    plugins: [react(), seoFiles(site)],
    build: {
      sourcemap: false,
      assetsInlineLimit: 4096,
    },
  }
})
