import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        
        head: {
          title:"Objetgrafik - Web Development based in East Los Angeles",
          charset: 'utf-16',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: {
            lang: 'en',
          },
          meta: [
            { name: 'description', content: 'Web Based Business Solutions' }
          ],
        },
      },


    modules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/robots', { configPath: "~/config/robots.config" },],
        '@nuxt/image'

        
    ],
    nitro: {
        compressPublicAssets: true,
            
        prerender: {
            crawlLinks:true,
        }
        
        
    }
    


})
