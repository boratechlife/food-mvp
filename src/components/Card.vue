<template>
  <div class="card pb-4  w-full shadow-sm rounded-2xl bg-white">
    <img src="/food.jpg" class="clip-circle rounded-2xl"/>

    <div class="flex flex-col items-center justify-center px-2 gap-4 mt-4">
        <h4 class="text-xl font-bold text-center text-[#874200]">Gobhi Aloo or Palak Paneer or Chicken Kadai</h4>
        <p class="text-gray-800 text-center">with Lehsuni dal + 3 Chapatis or Rice</p>
    </div>
    <div class="flex flex-col items-center justify-center px-2 gap-4 mt-4">
        <button class="w-full bg-[#874200] hidden py-3 rounded px-3 mb-2 mt-4 font-bold flex justify-between text-white">
            <div class="flex-1 flex justify-center">
                <span>Add to cart</span>
            </div>

            <div class="">
                <p>£ 9.00</p>
            </div>
        </button>

                <button class="w-full bg-[#F2F3F4] py-2 rounded-lg px-3 mb-2 mt-4 font-bold flex justify-between text-white">
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
              <span class="h-8 w-8 flex items-center justify-center rounded-full bg-[#874200] text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
                </span>
            </div>
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