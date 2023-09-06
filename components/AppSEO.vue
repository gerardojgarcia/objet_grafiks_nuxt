<script>
export default {
  name: "AppSEO",
};
</script>

<template>
  <section
    id="seo"
    class="bg-gray-200 dark:bg-gray-400 p-3 md:p-8 flex flex-col md:flex-row justify-center"
  >
    <div
      class="flex flex-col justify-center seo-info bg-white rounded-xl shadow-xl md:w-1/2 p-8 md:my-64 py-16 md:pl-6 dark:bg-night dark:text-white"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h4 class="text-6xl font-bold pt-16 md:pl-8">Get Ranked. Get Noticed.</h4>
      <p class="text-lg md:w-1/2 pt-6 md:pl-8 dark:text-gray-300">
        With experts in Search Engine Optimization and Analytics, we can help
        tailor your website copy to get your business noticed online.
      </p>
    </div>
    <div
      class="md:w-1/2 flex flex-col space-y-4 md:space-y-8 mt-8 md:mt-0 md:pl-6"
    >
      <div
        class="p-16 py-16 bg-white rounded-xl shadow-lg flex flex-col md:flex-row dark:bg-night dark:text-white"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div class="flex flex-col">
          <strong class="text-3xl">Expert Google Analytics</strong>
          <div class="space-y-4 md:w-3/4 pt-6 dark:text-gray-300">
            <p>
              We have a deep understanding of how to track and analyze website
              traffic, and are experts in using this data to improve website
              performance and drive conversions.
            </p>
            <p>
              SEO best practices make us able to optimize website content to
              increase visibility and drive organic traffic.
            </p>
            <p>
              Provide detailed and actionable insights that help businesses make
              data-driven decisions to improve their online presence.
            </p>
          </div>
        </div>
        <nuxt-img
          src="/SEO.webp"
          alt="Illustration of woman standing against graphs and search bars"
          class="w-96 md:self-end md:pr-16 pt-6"
          sizes="sm:95vw lg:35vw"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
      </div>
      <div
        class="p-16 py-16 bg-white rounded-xl shadow-lg flex flex-col md:flex-row dark:bg-night dark:text-white"
        data-aos="fade-left"
        data-aos-duration="2200"
      >
        <div class="flex flex-col">
          <strong class="text-3xl">Strong, Keyword Rich Content</strong>
          <div class="space-y-4 md:w-3/4 pt-6 dark:text-gray-300">
            <p>
              We know how search engines work and are able to create content
              that is optimized for both search engines and human readers.
            </p>
            <p>
              Research and identify the best keywords to target and incorporate
              them naturally into the content.
            </p>
            <p>
              Work to make sure that the content they create is engaging and
              informative, which not only helps with SEO but also keeps visitors
              on the website.
            </p>
          </div>
        </div>
        <nuxt-img
          src="/Stats.webp"
          class="w-96 self-end pr-16 pt-6"
          alt=""
          sizes="sm:95vw lg:35vw"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
      </div>
    </div>
  </section>
</template>
