<script setup></script>
<template>
  <section id="contact" class="flex flex-col md:p-8 bg-gray-200 dark:bg-gray-400">
    <div
      class="flex flex-col lg:flex-row md:justify-center md:align-center rounded-xl shadow-lg md:py-16 pb-36 bg-white md:mt-10 dark:bg-night dark:text-white p-8"
      data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="md:w-1/2">
        <strong class="text-5xl">Thank you for your interest!</strong>
        <p class="md:w-1/2 pt-6">
          Want to discuss your idea or project? Submit this form and someone
          from our team will contact you soon.
        </p>
        <NuxtImg src="/Coding.webp" sizes="sm:100vw lg:45vw" class="p-16" />
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl md:w-1/2 flex flex-col p-18">
        <strong class="text-4xl mt-8 ml-8">Contact Us</strong>

        <!--Contact Form-->
        <form action="mailto:hi@objetgrafik@gmail.com" method="get" enctype="text/plain" class="flex flex-col md:mt-18 md:p-6 self-center md:w-3/4">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="dark:text-black" required />
          <label for="name">Email</label>
          <input type="text" name="email" id="email" class="dark:text-black" required />
          <label for="name">Phone Number</label>
          <input type="text" name="phone_number" id="phone_number" class="dark:text-black" />

          <section class="flex flex-col md:flex-row justify-between md:px-16 my-8">
            <label for="list">Select A Service</label>
            <select name="service-list" id="service-list" class="dark:text-black">
              <option value="starter" class="dark:text-black">Starter</option>
              <option value="growth" class="dark:text-black">Growth</option>
              <option value="enterprise" class="dark:text-black">
                Enterprise
              </option>
              <option value="analysis" class="dark:text-black">
                Website Analysis
              </option>
              <option value="maintenance" class="dark:text-black">
                Maintenance
              </option>
              <option value="scraping" class="dark:text-black">
                Web Scraping
              </option>
              <option value="other" class="dark:text-black">
                Other </option>
            </select>
          </section>
          <!--Contact Form Text Area-->
          <label for="description">Tell us about your project!</label>
          <textarea name="description" id="project-descr" cols="30" rows="10" required class="dark:text-black"></textarea>

          <!--Contact Form Button-->
          <AppButton title="Submit" class="my-8 self-end" type="submit" />
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
label {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

input {
  width: 75%;
  border: 2px solid gray;
  border-radius: 0.5rem;
  margin-bottom: 1em;
}

select {
  padding: 0.5rem;
}

textarea {
  border-radius: 0.5rem;
  border: 2px solid gray;
}
</style>
