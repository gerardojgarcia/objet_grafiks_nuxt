<script>
import AppExperienceCard from "../components/AppExperienceCard.vue";
export default {
  name: "AppExperience",

  data() {
    return {
      client: [
        {
          id: 1,
          name: "Oranges & Lemons",
          description:
            "Cleaning Service based in DTLA. Integrated  onlinie chat, booking, and customer service features",
          link: "https://dtlaclean.com",
          img: "/earthtutor_mockup.webp",
          duration: "700",
        },
        {
          id: 2,
          name: "ELACompost",
          description:
            "Informational site that provides resources for understanding and implenting best composting practices",
          link: "https://elacompost.info",
          img: "/elacompost_desktop_mockup.webp",
          duration: "1100",
        },
        {
          id: 3,
          name: "Verified Transport",
          description:
            "Landing page for a fast, hyper-local logistics company based in San Bernardino, CA  ",
          link: "https://verifiedtransport.info",
          img: "/website_desktop_mockup_verified.webp",
          duration: "1400",
        },
        {
          id: 4,
          name: "Monarch Construction",
          description:
            "Project management firm specializing budget analysis and asset allocation",
          link: "https://buildwithmonarch.info",
          img: "/monarch_laptop_mockup2.webp",
          duration: "1800",
        },
        {
          id: 5,
          name: "Tewsr.art",
          description:
            "Graffiti artist specializing in graphic design, large scale murals, and retail spaces.",
          link: "https://",
          img: "/earthtutor_mockup.webp",
          duration: "1800",
        },
        {
          id: 6,
          name: "snap-studio!!",
          description:
            "Handmade home goods - from furniture to built-ins. Located in East Los Angeles",
          link: "https://snap-studio.shop",
          img: "/smartphone_mockup.webp",
          duration: "700",
        },
        {
          id: 7,
          name: "EarthTutor",
          description:
            "Free online resources for students studying Earth Science",
          link: "https://earthtutor.info",
          img: "/earthtutor_mockup.webp",
          duration: "1100",
        },
        {
          id: 8,
          name: "TaxBuddy",
          description:
            "Online accounting software designed for small & medium sized businesses",
          link: "https://yourtaxbuddy.xyz",
          img: "/tax_buddy_mobile_mockup1.webp",
          duration: "1400",
        },

        {
          id: 9,
          name: "Telos Truck",
          description:
            "Landing page providing information for the launch of their new electic truck",
          link: "https://buildwithmonarch.info",
          img: "/Building-Product.webp",
          duration: "1900",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="work" class="bg-gray-200 p-4 md:p-8 dark:bg-gray-400">
    <div
      class="flex flex-col md:justify-center md:align-center rounded-xl shadow-lg px-3 md:px-6 py-16 bg-white dark:bg-night dark:text-white"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div class="text-left md:self-start md:w-1/4 px-8">
        <h1 class="text-6xl font-bold">Projects</h1>
      </div>
      <div>
        <AppExperienceCard :client="client" />
      </div>
    </div>
  </section>
</template>
