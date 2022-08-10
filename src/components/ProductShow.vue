<template>
  <div>
    <div class="bg-white">
      <deep-pop-up></deep-pop-up>
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button id="tabs-1-tab-1" class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                  <span class="sr-only"> Angled view </span>
                  <span class="absolute inset-0 rounded-md overflow-hidden">
                <img src="https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2506_2507_2508-ruj-cremos-gerovital-beauty_2.png" alt="" class="w-full h-full object-center object-cover">
              </span>
                  <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                  <span class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
                </button>

                <!-- More images... -->
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img src="https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2506_2507_2508-ruj-cremos-gerovital-beauty_2.png" alt="Angled front view with bag zipped and handles upright." class="w-full h-full object-center object-cover sm:rounded-lg">
              </div>

              <!-- More images... -->
            </div>
          </div>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Ruj cremos cu acid hialuronic</h1>

            <div class="mt-3">
              <h2 class="sr-only">Informatii</h2>
              <p class="text-3xl text-gray-900">49,90 lei</p>
            </div>

            <!-- Reviews -->
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <!--
                    Heroicon name: solid/star

                    Active: "text-indigo-500", Inactive: "text-gray-300"
                  -->
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <!-- Heroicon name: solid/star -->
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <!-- Heroicon name: solid/star -->
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <!-- Heroicon name: solid/star -->
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <!-- Heroicon name: solid/star -->
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p class="sr-only">5 out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Descriere</h3>

              <div class="text-base text-gray-700 space-y-6">
                <p>
                  Criminal Lipstick. Senzație de hidratare. Luciu natural.
                </p>

                <ul>
                  <li>Confort și acoperire mare</li>
                  <li>Textură cremoasă</li>
                  <li>Disponibil în 3 nuanțe</li>
                </ul>
              </div>
            </div>

            <form class="mt-6">
              <!-- Colors -->
              <div>
                <h3 class="text-sm text-gray-600">Texturi:</h3>

                <fieldset class="mt-2">
                  <legend class="sr-only">Incearca o textura</legend>
                  <span class="flex items-center space-x-3">

                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-700">
                  <input type="radio" name="color-choice" value="look1" class="sr-only" aria-labelledby="color-choice-0-label" v-model="selectedFilter">
                  <img src="/textures/CB_01.jpg" alt="cb_01" class="w-10 h-10">
                </label>

                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-700">
                  <input type="radio" name="color-choice" value="look1" class="sr-only" aria-labelledby="color-choice-0-label" v-model="selectedFilter">
                  <img src="/textures/CB_02.jpg" alt="cb_01" class="w-10 h-10">
                </label>

                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-700">
                  <input type="radio" name="color-choice" value="look1" class="sr-only" aria-labelledby="color-choice-0-label" v-model="selectedFilter">
                  <img src="/textures/CB_03.jpg" alt="cb_01" class="w-10 h-10">
                </label>
              </span>
                </fieldset>
              </div>

              <div class="mt-10 flex sm:flex-col1">
                <button type="submit" class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Adauga in cos</button>

                <button type="button" class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <!-- Heroicon name: outline/heart -->
                  <svg class="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span class="sr-only">Adauga la favorite</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeepPopUp from "@/components/DeepPopUp";

export default {
  name: "ProductShow",
  components: [DeepPopUp]
}
</script>
