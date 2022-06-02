<template>
  <div class="absolute top-0 w-full h-auto pb-5 bg-white z-40 shadow-xl">
      <div class="absolute text-white right-1 top-1 z-50 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <img src="/food.jpg" class="filter-50"/>

      <div class="content px-4 mt-3">
          <h4 class="font-bold text-lg mb-2">Food Title</h4>
          <p class="font-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
      </div>
      <div class=" px-4 mt-1">
          <h5 class="font-bold mb-2">Required Option</h5>
          <div class="flex flex-col gap-2">
              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>

              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>

              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>
          </div>
      </div>

    <div class=" px-4 mt-1">
          <h5 class="font-bold mb-2">Additional Option</h5>
          <div class="flex flex-col gap-2">
              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>

              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>

              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>Option 1</span>
                  </label>
               <div class="">
                    <span>+$1.00</span>
               </div>
              </div>
          </div>
      </div>

           <div class=" px-4 mt-3">
          <h5 class="font-bold mb-2">Special Instructions</h5>
          <div class="">
              <textarea name="" class="w-full bg-gray-100 rounded p-3" id="" cols="30" rows="5"></textarea>
          </div>
      </div>

           <div class=" px-4 mt-2">
          <h5 class="font-bold mb-2">Delivery Time</h5>
          <div class="flex flex-col gap-2">
              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>12:00 AM - 01:00 PM</span>
                  </label>
       
              </div>

              <div class="flex gap-2 jusify-between items-center">
                  <label for="" class="text-base flex items-center gap-4">
                      <input type="radio" name="option_1" class="h-4 w-4" id="">
                      <span>01:00 PM - 02:00 PM</span>
                  </label>

              </div>
          </div>
      </div>

<div class="flex flex-col px-4">

                <div class="w-full bg-[#F2F3F4] py-2 rounded-lg px-3 mb-2 mt-4 font-bold flex justify-between text-white">
            <div class=" flex justify-center">
                <span class="h-8 w-8 flex bg-[#CDCFD0] items-center justify-center rounded-full bg-gray-300 text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
</svg>
                </span>
            </div>
                        <div class="text-black text-lg">
                1
            </div>
            <div class="">
              <span class="h-8 w-8 flex items-center justify-center rounded-full bg-[#000000] text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
                </span>
            </div>
        </div>

                        <div class="w-full bg-[#000000]  py-3 rounded px-3 mb-2 mt-4 font-bold flex justify-between text-white">
            <div class="flex-1 flex justify-center">
                <span>Add to cart</span>
            </div>

            <div class="">
                <p>£ 9.00</p>
            </div>
        </div>
</div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>