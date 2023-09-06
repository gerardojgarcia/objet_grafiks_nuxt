import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Objetgrafik - Web Development based in East Los Angeles",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [{ name: "description", content: "Web Based Business Solutions" }],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/robots", { configPath: "~/config/robots.config" }],
    "@nuxt/image",
    "nuxt-gtag",
  ],
  nitro: {
    compressPublicAssets: true,

    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      "/public/**": {
        headers: { "cache-control": `public,max-age=${1},s-maxage=${1}` },
      },
      "/_nuxt/**": {
        headers: { "cache-control": `public,max-age=${1},s-maxage=${1}` },
      },
    },
  },

  gtag: {
    id: "G-N7CD3YVJBN",
  },

  tailwindcss: {
    configPath: "~/config/tailwind.config.js",
  },
});
