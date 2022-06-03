<template>
  <div class="bg-[#F6ECE2] min-h-screen relative">
    <!-- START HEADER -->
    <TopNav />

    <!-- END HEADER -->

    <!-- START SCROLL NAVIGATION -->
    <HorizontalScroll />

    <div class="h-full w-full bg-[#FFB876] min-h-screen mt-40 relative">
      <div
        class="absolute h-64 -top-[4.5rem] w-full border-radius bg-[#FFB876]"
      >
        <div class="-mt-28">
            <CardSection />
        </div>
      </div>
    </div>

    <!-- <OrderBottomBar/> -->
<!-- <MenuDetails />
<WhereToDeliver /> -->
<!-- <Cart /> -->
<!-- <Checkout /> -->
<!-- <About /> -->

  </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import HorizontalScroll from "./HorizontalScroll.vue";
import CardSection from './CardSection.vue'
import OrderBottomBar from './OrderBottomBar.vue'
import MenuDetails from './MenuDetails.vue'
import WhereToDeliver from './WhereToDeliver.vue'
import Cart from './Cart.vue'
import Checkout from './Checkout.vue'
import About from './About.vue'
export default {
  components: {
    TopNav,
    HorizontalScroll,
    CardSection,
    OrderBottomBar,
    MenuDetails,
    WhereToDeliver,
    Cart,
    Checkout,
    About
  },
};
</script>

<style></style>
