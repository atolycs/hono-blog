//import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import ssg from "@hono/vite-ssg"
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    //build(),
    devServer({
      entry: 'src/index.tsx'
    }),
    ssg({ entry: 'src/index.tsx'})
  ]
})
