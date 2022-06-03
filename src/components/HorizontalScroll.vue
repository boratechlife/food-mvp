<template>
  <div class="nav-content flex items-center gap-4 overflow-x-hidden px-2">
    <button
      v-for="(item, index) in daysOfWeek"
      :key="'days_of_week_' + index"
      @click="active = item.name"
      :class="
        active === item.name
          ? 'bg-[#874200] text-white font-medium'
          : 'bg-[#FFB876] text-black'
      "
      class="rounded-xl text-sm px-3 py-2"
      @click.prevent="toggleScroll(index)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      up: true,
      value: 0,
      increment: 100,
      ceiling: 327,
      active:'',
      daysOfWeek: [
        {
          id: 1,
          name: "Monday",
        },
        {
          id: 2,
          name: "Tuesday",
        },
        {
          id: 3,
          name: "Wenesday",
        },
        {
          id: 4,
          name: "Thursday",
        },
        {
          id: 5,
          name: "Friday",
        },
        {
          id: 6,
          name: "Saturday",
        },
        {
          id: 7,
          name: "Sunday",
        },
      ],
    };
  },
  methods: {
    toggleScroll(index) {
        if(index < 2) {
            return
        }
      let content = document.querySelector(".nav-content");
      if (this.up == true && this.value <= this.ceiling) {
        this.value += this.increment;

        if (this.value == this.ceiling) {
          this.up = false;
        }
      } else {
        this.up = false;
        this.value -= this.increment;

        if (this.value == 0) {
          this.up = true;
        }
      }
      content.scrollLeft = this.value;
    },
  },
};
</script>

<style></style>
