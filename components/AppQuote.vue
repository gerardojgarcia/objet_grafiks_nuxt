<script>

import RangeSlider from 'vue-range-slider'
export default {
  name: "AppQuote",

  data() {
    return{
        devSliderValue: "",
        hoursSliderValue: "",
        daySliderValue: "",

        totalValue: ""

    }
  },




    


};
</script>

<template>
  <section id="quote" class="bg-gray-200 p-8">

    <div
      class="md:flex md:justify-between md:align-center rounded-xl shadow-lg mx-6 py-16 px-8 bg-white"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      
      <div class="w-1/2 flex align-center justify-center " data-aos="fade-left" data-aos-duration="2000">
        <form action="submit" class="flex flex-col shadow-lg ml-8 p-16 space-y-8 w-1/2  " >
          <div class="form-devs space-y-4 flex flex-col">
            <label for="devs" class="font-bold text-lg">How many developers do you need?</label>
            <input type="range" name="devs" id="devs" class="devs w-3/4" min="0" max="4"  v-model.number="devSliderValue"/>
            <p class="devs-value text-lg font-bold">{{ devSliderValue}} </p>
          </div>

          <div class="form-hours space-y-4 flex flex-col">
            <label for="hours" class="font-bold text-lg">How many hours per day do you need?</label>
            <input type="range" name="hours" id="hours" class="devs form-range bg-gray-100 border-black border-2 h-6 w-3/4" min="0" max="12" v-model.number="hoursSliderValue"/>
            <p class="hours-value text-lg font-bold">{{ hoursSliderValue }} hours</p>
          </div>

          <div class="form-days space-y-4 flex flex-col">
            <label for="days" class="font-bold text-lg">How many days do you need?</label>
            <input type="range" name="days" id="days" class="devs w-3/4" min="0" max="30" v-model.number="daySliderValue"/>
            <p class="days-value text-lg font-bold">{{ daySliderValue }} Days</p>
          </div>

         
          <strong class="form-total-title">Total:</strong>
          <p class="form-total text-2xl font-bold">${{ (devSliderValue * 45) * (hoursSliderValue * daySliderValue) }} USD</p>



        </form>


      </div>

      <div class=" flex  flex-col text-left justify-center w-1/2 ml-20 px-8 ">
        <h3 class="text-6xl font-bold flex-start" data-aos="fade-right" data-aos-duration="2000">Need A Developer?</h3>

        <p class="text-xl mt-8" data-aos="fade-right" data-aos-duration="2000">
          Our front and backend web developers are ready to build your next
          project.
        </p>
        <p class="self-end pt-6">Get a quick quote</p>
      </div>
    </div>
  </section>
</template>
