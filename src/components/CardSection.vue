
<template>
  <div class=" w-full py-4 px-4 gap-4 flex flex-col z-40 bg-transparent mt-10">
<Card @add-to-cart ="$emit('add-to-cart')" @show-details="$emit('show-details')"/>

<Card />

<Card />

  </div>
</template>

<script>
import Card from './Card.vue'
import DeliveryCard from './DeliveryCard.vue'
export default {
  emits:['add-to-cart'],
  components: {
      Card,
      DeliveryCard
  }
}
</script>

<style>

</style>