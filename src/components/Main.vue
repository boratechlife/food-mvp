<template>
  <main class="bg-[#F6ECE2] h-screen relative overflow-x-hidden">
   <!-- <div class="fixed z-[45] overlay bg-opacity-50 h-screen w-full top-0 inset-0 bg-black"></div> -->
    <div class="h-full z-10 w-full flex justify-end top-[24%]  flex-col absolute  inset-0">
 <div class="h-[90%] bg-[#FFB876] w-[100%] rounded-t-full bg-scale"></div>
    </div>
    <div class="header z-40">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between">
          <div class="menu">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 10.5H28.5" stroke="#874200" stroke-width="2" stroke-linecap="round"/>
<path d="M7.5 18H28.5" stroke="#874200" stroke-width="2" stroke-linecap="round"/>
<path d="M7.5 25.5H28.5" stroke="#874200" stroke-width="2" stroke-linecap="round"/>
</svg>

          </div>

          <div class="text flex-1 justify-center flex items-center flex-col">
            <h4 class="w-3/4 fotn-bold">Shubh Aarambh</h4>
            <p class="w-3/4 text-sm">Wembley Park, HA9 8HP</p>
          </div>
         
        </div>
      </div>
    </div>

<!-- START SCROLL NAVIGATION -->
<div class="nav-content flex items-center gap-4 overflow-x-hidden px-2">
  <button class=" bg-[#FFB876] rounded px-3 py-2" @click.prevent="scroll_left">Monday</button>
    <button class=" bg-[#FFB876] rounded px-3 py-2"  @click.prevent="scroll_left">Tuesday</button>
      <button class=" bg-[#FFB876] rounded px-3 py-2"  @click.prevent="scroll_left">Wenesday</button>
      <button class=" bg-[#FFB876] rounded px-3 py-2"  @click.prevent="scroll_left">Thursday</button>
        <button class=" bg-[#FFB876] rounded px-3 py-2"  @click.prevent="scroll_left">Friday</button>
          <button class=" bg-[#FFB876] rounded px-3 py-2"  @click.prevent="scroll_left">Saturday</button>
</div>

<CardSection />
<!-- <OrderBottomBar/> -->
<!-- <MenuDetails />
<WhereToDeliver /> -->
<!-- <Cart /> -->
<!-- <Checkout /> -->
<!-- <About /> -->
  </main>
</template>

<script>
import CardSection from './CardSection.vue'
import OrderBottomBar from './OrderBottomBar.vue'
import MenuDetails from './MenuDetails.vue'
import WhereToDeliver from './WhereToDeliver.vue'
import Cart from './Cart.vue'
import Checkout from './Checkout.vue'
import About from './About.vue'


export default {
    name:"Main",
    components: {
        CardSection,
        OrderBottomBar,
        MenuDetails,
        WhereToDeliver,
        Cart,
        Checkout,
        About
    },
    methods: {
      scroll_left() {
      
  let content = document.querySelector(".nav-content");
  if( content.scrollLeft >= 277) {
  
  content.scrollLeft = 0
  }else {
  content.scrollLeft += 100
  }
 
},
scroll_right() {
  let content = document.querySelector(".wrapper-box");
  content.scrollLeft += 40;
}
    }
}
</script>