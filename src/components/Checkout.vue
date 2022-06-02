<template>
  <div class="absolute top-0 bg-white min-h-screen w-full  z-50">
      
      <div class="flex justify-between px-4 pt-2 pb-4">
          <h4 class="text-2xl font-bold">Checkout</h4>
          <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
          </div>
      </div>

<div class="content px-4">
    <h4 class="font-bold text-lg mb-2">Delivery Details</h4>
    <div class="flex flex-col gap-4">
          <input type="text" class="w-full apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Full Name">
          <input type="text" class="w-full apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Last Name">
          <input type="text" class="w-full apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="">
          <input type="text" class="w-full apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Mobile Number">
          <div class="flex  gap-2">
          <input type="text" class="w-1/4 apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="House no.">
          <input type="text" class="flex-1 w-full apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Street Address">

          </div>

            <div class="flex  lg:flex-nowrap gap-2">
          <input type="text" class=" flex-1 w-full  apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="House no.">
          <input type="text" class=" apperance-none w-1/4 outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Street Address">

          </div>

<div class="flex gap-4 items-center">
    <input type="checkbox" name="" class="h-5 w-5" id="check">
    <label for="check">Save My Details for next Order</label>
</div>

<div class="flex flex-col gap-3 my-4">
    <h4 class="font-bold text-black text-xl">Discount</h4>

                <div class="flex  gap-2">
          <input type="text" class=" flex-groww-full  apperance-none outline-black border border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="House no.">
          <button type="text" class=" w-full apperance-none lg:w-1/4 outline-black border border-gray-200 bg-black text-white rounded-lg shadow-sm px-3 py-2 " placeholder="Street Address">Apply</button>

          </div>

</div>




    </div>
</div>

<div class="">
        <h4 class="font-bold text-black text-xl px-4 mb-4">Payment Method</h4>
    <div class="flex flex-col gap-3 bg-gray-200 px-4 py-3">
                  <div class=" flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00174 10H21.9983C21.9862 7.82497 21.8897 6.64706 21.1213 5.87868C20.2426 5 18.8284 5 16 5H8C5.17157 5 3.75736 5 2.87868 5.87868C2.1103 6.64706 2.01384 7.82497 2.00174 10ZM22 12H2V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V12ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H7.01C7.56228 17 8.01 16.5523 8.01 16C8.01 15.4477 7.56228 15 7.01 15H7Z" fill="#333333"/>
</svg>
<span>Credit / debit card</span>
                  </div>

                  <div class="input">
                       <input type="text" class="w-full apperance-none bg-white  outline-black border bordrr border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Card Number">
                  </div>

                  <div class="flex items-center gap-4">
                       <input type="text" class="w-full apperance-none bg-white  outline-black border bordrr border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Expiry Date">
                        <input type="text" class="w-full apperance-none bg-white  outline-black border bordrr border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="CVC/CVV">
                  </div>

                  <div class="input">
                       <input type="text" class="w-full apperance-none bg-white  outline-black border bordrr border-gray-200 rounded-lg shadow-sm px-3 py-2 " placeholder="Name on card">
                  </div>


                <div class="flex  gap-2">
  
          <button type="text" class=" w-full apperance-none outline-black border border-gray-200 bg-black text-white rounded-lg shadow-sm px-3 py-2 flex items-center" >
              <div class="flex-1 flex justify-center">
                  Pay Now
              </div>
              <span>$29.90</span>
          </button>

          </div>

</div>

    <div class="flex flex-col gap-3 bg-white px-4 py-3">
                  <div class=" flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58579 5.58579C2 6.17157 2 7.11438 2 9V15C2 16.8856 2 17.8284 2.58579 18.4142C3.17157 19 4.11438 19 6 19H18C19.8856 19 20.8284 19 21.4142 18.4142C22 17.8284 22 16.8856 22 15V9C22 7.11438 22 6.17157 21.4142 5.58579C20.8284 5 19.8856 5 18 5H6C4.11438 5 3.17157 5 2.58579 5.58579ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7H5ZM16 16C16 15.4477 16.4477 15 17 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H17C16.4477 17 16 16.5523 16 16ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="#333333"/>
                    </svg>

                    <span>Pay Cash</span>
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