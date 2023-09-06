<script>
import AppNavButton from "../components/AppNavButton.vue";
import ThreeComponent from "../components/ThreeComponent.vue";

export default {
  name: "AppHero",

  component: {
    ThreeComponent,
  },
};
</script>

<template>
  <div id="hero" class="bg-gray-200 p-8 mt-12 md:mt-0 dark:bg-gray-400">
    <div
      class="flex flex-col lg:flex-row md:justify-center md:align-center rounded-xl shadow-lg md:py-16 pb-36 bg-white md:mt-10 dark:bg-night dark:text-white"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div class="hero-info md:w-1/4 p-12 md:p-24 self-center">
        <div
          class="hero-text text-left space-y-3 mb-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 class="text-6xl font-bold">Go beyond a website.</h1>
          <p class="subtitle text-xl dark:text-gray-400">
            With experts in Web Development, SEO, and E-commerce ready to work
            with you, create an online experience that your customers coming
            back for more
          </p>
        </div>

        <AppNavButton to="#work" link="Explore Our Work" />
      </div>

      <div
        class="hero-graphic md:w-3/4 grid place-items-center overflow-hidden"
      >
        <ThreeComponent />
        <!--<div class="z-6 mr-32 absolute  " data-aos="fade-left" data-aos-duration="700"><img src="/Web Development.webp" alt="Illustration of the different aspects of web development " ></div>
        <div class="mt-36 ml-72 z-0 absolute" data-aos="fade-right" data-aos-duration="1200">

        <img src="/Digital Marketing.webp" alt="">
        </div>
        <div class=" mt-96 absolute mr-96 z-2" data-aos="fade-left" data-aos-duration="1600"><img src="/E-commerce.webp" alt=""></div>-->

        <!--  Nuxt Image Location

                <nuxt-img src="/Development.webp" alt="image of a team collaborating on building a website"
                    data-aos="fade-left" data-aos-duration="1200" sizes="sm:100vw lg:100vw"/>
-->
      </div>
    </div>
  </div>
</template>
<style scoped></style>
