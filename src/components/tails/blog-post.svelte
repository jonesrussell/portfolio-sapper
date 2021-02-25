<script lang="ts">
  export let img: string = '';
  export let title: string = '';
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div class="relative flex-shrink-0">
    <!--<img class="object-cover w-full h-56" src={imgSrc} />-->
    {img}
  </div>
  <div class="flex flex-col justify-between flex-1">
    <div class="flex flex-col justify-between flex-1 p-6 bg-white">
      <div>
        <a
          href="https://dev.to"
          class="text-xl font-semibold leading-7 text-gray-900">{title}</a
        >
        <p class="mt-3 text-base leading-6 text-gray-500">
          <slot />
        </p>
      </div>
      <p class="mt-3 text-sm font-medium leading-5">
        <a href="https://dev.to" class="inline-block">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-orange-800 bg-orange-100 rounded-full"
            >Eloquent</span
          >
        </a>
      </p>
    </div>
  </div>
</div>
