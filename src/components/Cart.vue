<template>
  <div class="absolute top-0 bg-white min-h-screen w-full p-4 z-50">
      <div class="flex justify-between pt-2 pb-4">
          <h4 class="text-lg font-bold">Cart</h4>
          <div class="" @click="$emit('close-cart')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
          </div>
      </div>

      <div class="items">
          <div class="item py-2  ">
              <div class="flex text-sm mb-3 font-bold  justify-between items-center">
                <h4>Tuesday, April 2</h4>
                <div class="bg-[#FFDF34] font-medium px-2 py-1 rounded">12:00 AM - 01:00 PM</div>
              </div>
              <div class="flex mb-3 pt-2">
                  <div class="flex-1 flex gap-4 justify-between">
                      <select class="w-10 bg-black rounded-lg  h-8 text-white" name="" id="">
                        <option value="1">1</option>
                         <option value="2">2</option>
                      </select>
                      <div class="flex-1">
                          <h4 class="font-medium">Food Title</h4>
                          <p class="text-gray-400 font-light">Selected options</p>
                      </div>
                  </div>
                  <div class="">
                      <span class="font-bold">$9.00</span>
                  </div>
              </div>
              <hr  class="my-2 border-black"/>
          </div>

             <button type="text" class="appearance-none border border-black px-2 w-full outline-black flex justify-center items-center rounded-lg px-3 gap-2 py-2 " >
                 <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                 </span>
                 <span>Add Another Menu</span>
             </button>

          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>