<script lang="ts">
  import { format } from 'date-fns';
  import hljs from 'highlight.js';

  export let date: Date = new Date();
  export let img: string = '';
  export let title: string = '';
  export let href: string = '';

  hljs.highlightAll();

  // @TODO pull from session BLOG_URL
  const base = 'https://blog.jonesrussell42.xyz/';

  // Prepend 'base' to any images hosted at blog 'base'
  img = img?.replace(/src="[^http](.*)"/, `src="${base}$1"`);

  // @TODO add classes better
  // Nice tailwind classes for card image
  const classes = 'object-cover w-full h-56';
  img = img?.replace(/src="(.*)"/, `src="$1" class="${classes}"`);

  // No image? insert generic
  // @TODO null is a string...
  if (img === 'null') {
    img = `<img src="generic-blog.png" class="${classes}"/>`;
  }
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div class="relative flex-shrink-0">
    <a {href} rel="prefetch">
      {@html img}
    </a>
  </div>
  <div class="flex flex-col justify-between flex-1">
    <div class="flex flex-col flex-1 p-6 bg-white">
      <div class="pb-4">
        <time
          class="inline-block px-3 py-1 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200 m-0"
          >{format(date, 'PPP')}</time
        >
      </div>
      <div>
        <a
          {href}
          rel="prefetch"
          class="text-xl font-semibold leading-7 text-gray-900">{title}</a
        >
        <p class="m-0 mt-3 text-base leading-6 text-gray-800">
          <slot />
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
