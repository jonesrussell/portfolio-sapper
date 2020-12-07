<script lang="typescript">
  import Fa from "svelte-fa";
  import { debug } from "svelte/internal";
  //import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

  export let title: string = "Feature";
  // @TODO IconDefinition? instead of any
  export let icon: any;
</script>

<!-- Feature -->
<div
  class="p-16 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
  <div
    class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden text-white rounded-full">
    <Fa {icon} size="3x" class="text-black" />
  </div>
  <div class="mt-3 mb-6">
    <h5 class="pb-2 text-xl font-bold leading-6 text-gray-600">{title}</h5>
    <p class="mt-1 text-base leading-6 text-gray-500">
      <slot />
    </p>
  </div>
</div>
