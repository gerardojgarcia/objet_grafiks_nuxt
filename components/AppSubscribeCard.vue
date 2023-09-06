<script>
import AppNavButton from "../components/AppNavButton.vue";

export default {
  name: "AppSubscribeCard",

  props: {
    plans: Array,
  },

  component: {
    AppNavButton,
  },
};
</script>

<template>
  <div
    class="subscription-card rounded-xl shadow-lg md:w-1/3 py-16 px-4 mt-8 justify-center flex flex-col md:mt-0 md:px-8 text-left bg-white md:mr-4 hover:shadow-2xl duration-150 dark:bg-night dark:text-white"
    v-for="plans in plans"
    :key="plans.id"
    data-aos="fade-up"
    data-aos-duration="1800"
  >
    <p class="subscription-title text-2xl mb-1 font-bold">{{ plans.name }}</p>
    <p class="subscription-price text-5xl font-bold">
      <span class="text-sm font-normal mr-2"> from</span>${{ plans.price }}
    </p>
    <p
      class="subscription-subtitle text-gray-600 dark:text-gray-300 mt-3 mr-12"
    >
      {{ plans.description }}
    </p>
    <span class="subscription-card-span bg-gray-300 dark:text-white"></span>
    <ul
      class="pt-8 space-y-4"
      v-for="features in plans.features"
      :key="features"
    >
      <li class="flex">
        <Icon name="ri:checkbox-circle-line" class="w-10 h-10 mr-4" />
        <div>
          <span class="font-bold text-base text-black dark:text-gray-300">{{
            features.feature
          }}</span>
          <p
            class="text-sm pr-4 flex flex-col text-gray-500 dark:text-gray-400"
          >
            {{ features.detail }}
          </p>
        </div>
      </li>
    </ul>

    <AppNavButton to="#contact" link="Get In Touch" class="mt-10" />
  </div>
</template>

<style>
.subscription-card {
  min-height: 33rem;
}

.subscription-card-span {
  width: max(20%, 90%);
  height: 0.2rem;

  display: inline-block;
  border-radius: 0.5rem;
  margin: 1rem 0rem 1rem;
}
</style>
