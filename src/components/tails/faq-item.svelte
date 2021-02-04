<script lang="typescript">
  export let question: string = "";
</script>

<div
  class="mt-10 px-6 sm:px-8 md:px-12 py-6 sm:py-8 bg-white border border-gray-200 sm:rounded-lg sm:shadow w-full md:w-2/3 mx-auto">
  <h3 class="font-bold text-lg sm:text-xl md:text-2xl text-purple-500">
    {question}
  </h3>
  <p class="mt-2 text-gray-800 text-base sm:text-lg md:text-normal">
    <slot />
  </p>
</div>
