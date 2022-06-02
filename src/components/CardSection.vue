
<template>
  <div class="absolute w-full py-4 px-4 gap-4 flex flex-col z-40 bg-transparent mt-10">
<DeliveryCard />
<div class="card h-64 w-full rounded bg-white"></div>
<div class="card h-64 w-full rounded bg-white"></div>
<div class="card h-64 w-full rounded bg-white"></div>
  </div>
</template>

<script>
import Card from './Card.vue'
import DeliveryCard from './DeliveryCard.vue'
export default {
  components: {
      Card,
      DeliveryCard
  }
}
</script>

<style>

</style>