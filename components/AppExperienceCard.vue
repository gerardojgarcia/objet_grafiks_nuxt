<script>
import AppNavButton from "../components/AppNavButton.vue";

export default {
  name: "AppExperienceCard",
  props: {
    client: Array,
  },
  components: {
    AppNavButton,
  },
};
</script>

<template>
  <div
    class="flex flex-row flex-wrap mx-6 md:mx-16 mt-16 justify-center self-center"
  >
    <div
      class="client-card shadow-xl rounded-lg pb-12 md:w-80 bg-gray-100 dark:bg-gray-600 overflow-hidden hover:shadow-2xl mt-16 mx-1 md:mx-8"
      v-for="client in client"
      data-aos="fade-up-left"
      :data-aos-duration="client.duration"
    >
      <nuxt-img
        :src="client.img"
        alt="Img of website"
        class="w-full h-60 object-cover"
        sizes="sm:100vw md:100vw lg:100vw"
        height="800px"
        width="600px"
        format="webp"
      />
      <div class="client-card-info space-y-4 mt-4 px-4 mb-6">
        <strong class="text-xl dark:text-white">{{ client.name }}</strong>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          {{ client.description }}
        </p>
      </div>

      <AppNavButton
        :to="client.link"
        link="Explore"
        target="_blank"
        class="mx-4 mt-12 dark:text-black"
      />
    </div>
  </div>
</template>
