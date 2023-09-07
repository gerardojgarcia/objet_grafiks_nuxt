<script setup></script>
<template>
  <section id="contact" class="flex flex-col p-8 bg-gray-200 dark:bg-gray-400">
    <div
      class="flex flex-col lg:flex-row md:justify-center md:align-center rounded-xl shadow-lg md:py-16 pb-36 bg-white md:mt-10 dark:bg-night dark:text-white p-8"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div class="w-1/2">
        <strong class="text-5xl">Thank you for your interest!</strong>
        <p class="w-1/2 pt-6">
          Want to discuss your idea or project? Submit this form and someone
          from our team will contact you soon.
        </p>
        <NuxtImg src="/Coding.webp" sizes="sm:100vw lg:45vw" class="p-16" />
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-1/2 flex flex-col p-24">
        <strong class="text-4xl">Contact Us</strong>
        <form action="submit" class="flex flex-col mt-24 p-6 self-center w-3/4" >

          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="dark:text-black">
          <label for="name">Email</label>
          <input type="text" name="email" id="email" class="dark:text-black">
          <label for="name">Phone Number</label>
          <input type="text" name="phone_number" id="phone_number" class="dark:text-black">

          <section class="flex justify-between px-16 mt-8 ">
            <label for="list">Select A Service</label>
            <select name="service-list" id="service-list" class="dark:text-black">
              <option value="starter" class="dark:text-black">Starter</option>
              <option value="growth" class="dark:text-black">Growth</option>
              <option value="enterprise" class="dark:text-black">Enterprise</option>
              <option value="analysis" class="dark:text-black">Website Analysis</option>
              <option value="maintenance" class="dark:text-black">Maintenance</option>
              <option value="scraping" class="dark:text-black">Web Scraping</option>
              </select>
            </section>




        </form>
      </div>
    </div>
  </section>
</template>


<style scoped>
  label {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: .5rem;
  }
  input {
    width: 75%;
    border: 2px solid gray;
    border-radius: .5rem;
  }

  select {
    padding: .7rem;
  }



</style>
