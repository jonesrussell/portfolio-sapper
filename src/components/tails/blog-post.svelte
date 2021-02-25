<script lang="ts">
  export let img: string = '';
  export let title: string = '';
  export let href: string = '';
  export let tags: string[];

  const base = 'https://blog.jonesrussell42.xyz/';

  img = img?.replace(/src="[^http](.*)"/, `src="${base}$1"`);

  if (img === 'null') {
    img = '<img src="generic-blog.png"/>';
  }

  console.log('img', img);
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div class="relative flex-shrink-0">
    {@html img}
  </div>
  <div class="flex flex-col justify-between flex-1">
    <div class="flex flex-col justify-between flex-1 p-6 bg-white">
      <div>
        <a {href} class="text-xl font-semibold leading-7 text-gray-900"
          >{title}</a
        >
        <p class="mt-3 text-base leading-6 text-gray-500">
          <slot />
        </p>
      </div>
      <!--<p class="mt-3 text-sm font-medium leading-5">
        <a href="https://dev.to" class="inline-block">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-orange-800 bg-orange-100 rounded-full"
            >{tags}</span
          >
        </a>
      </p>-->
    </div>
  </div>
</div>
