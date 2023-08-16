import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        
        head: {
          charset: 'utf-16',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: {
            lang: 'en',
          },
        },
      },


    modules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/robots', { configPath: "~/config/robots.config" },],

        
    ],
    nitro: {
        compressPublicAssets: {
            gzip: true,
        brotli: true,
        },
        prerender: {
            crawlLinks:true,
        }
        
        
    }
    


})
