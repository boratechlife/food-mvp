<template>
  <div class="absolute top-0 w-full h-auto pb-5 bg-white z-50 shadow-xl">
    <div class="absolute text-white right-1 top-1 z-50 p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <img src="/map.png" class="filter-50" />
    <div class="content px-3 py-4">
      <div class="title my-2">
        <h4 class="text-lg font-semi-bold">Shubh Aarambh</h4>
        <p class="font-light gap-2 flex items-center">
          <span>Indian</span>
          <span class="h-2 rounded-full bg-black w-2"></span>
          <span>Vegetarian</span>
          <span class="h-2 rounded-full bg-black w-2"></span>
          <span>Spicy</span>
          <span class="h-2 rounded-full bg-black w-2"></span>
        </p>
      </div>

      <div class="details py-3">
        <div class="flex justify-between items-center my-2">
          <div class="flex items-center items-center my-2 text-sm gap-2">
            <span>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.39804 15.804C8.88097 15.0348 14 12.0163 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 12.0163 5.11903 15.0348 6.60196 15.804C6.85483 15.9351 7.14517 15.9351 7.39804 15.804ZM7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
                  fill="#333333"
                />
              </svg>
            </span>
            <p>21 College Hill, London EC4R 2RP</p>
          </div>
          <div>
            <a href="" class="font-bold">Map</a>
          </div>
        </div>
        <hr class="my-2" />

        <div class="flex justify-between items-center mb-2 py-2">
          <div class="flex items-center gap-2">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.67962 1.32038L3.29289 0.707107C3.68342 0.316583 4.31658 0.316582 4.70711 0.707106L7.29289 3.29289C7.68342 3.68342 7.68342 4.31658 7.29289 4.70711L5.50048 6.49952C5.2016 6.7984 5.1275 7.255 5.31653 7.63307C6.40929 9.81858 8.18142 11.5907 10.3669 12.6835C10.745 12.8725 11.2016 12.7984 11.5005 12.4995L13.2929 10.7071C13.6834 10.3166 14.3166 10.3166 14.7071 10.7071L17.2929 13.2929C17.6834 13.6834 17.6834 14.3166 17.2929 14.7071L16.6796 15.3204C14.5683 17.4317 11.2257 17.6693 8.83698 15.8777L7.62857 14.9714C5.88504 13.6638 4.33622 12.115 3.02857 10.3714L2.12226 9.16302C0.330722 6.7743 0.568269 3.43173 2.67962 1.32038Z"
                  fill="#333333"
                />
              </svg>
            </span>
            <p>012 3456 7890</p>
          </div>
        </div>

        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-2">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V11.75C11 12.4404 11.5596 13 12.25 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H13V6.5Z"
                  fill="#333333"
                />
              </svg>
            </span>
            <p>Open until 10:00 PM</p>
          </div>
        </div>


        <div class="pl-4">
            <table class="table text-sm">
                <tr>
                    <td class="font-bold px-2 py-1">Monday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Tuesday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Wenesday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Thurday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Friday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Saturday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                <tr>
                    <td class="font-bold px-2 py-1">Sunday</td>
                    <td class="px-2 py-1">9:00AM - 10:00PM</td>
                    <td><a href="" class="font-bold px-2 py-1">Menu</a></td>
                </tr>
                
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
