<script lang="typescript">
  import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

  export let title: string = "Feature";
  export let image: IconDefinition;
</script>

<div
  class="p-16 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
  <div
    class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
    {image}
  </div>
  <div class="mt-3 mb-6">
    <h5 class="pb-2 text-xl font-bold leading-6 text-gray-600">{title}</h5>
    <p class="mt-1 text-base leading-6 text-gray-500">
      <slot />
    </p>
  </div>
</div>
