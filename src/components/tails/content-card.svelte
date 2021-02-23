<script lang="ts">
  import { format } from 'date-fns';

  export let date: Date = new Date();
  export let title: string = 'Your Next Great Idea';
  export let href: string = '#';
</script>

<div
  class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"
>
  <div
    class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto"
  >
    <div class="relative lg:w-1/2">
      <img
        src="https://blog.jonesrussell42.xyz/assets/img/screenshot-scripts.png"
        alt=""
        class="object-cover w-full lg:absolute h-80 lg:h-full"
      />
      <svg
        class="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
        viewBox="0 0 20 104"
        fill="currentColor"
      >
        <polygon
          points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"
        />
      </svg>
    </div>
    <div
      class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
    >
      <div>
        <p
          class="inline-block px-3 py-1 mb-0 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200 m-0 mb-4"
        >
          {format(new Date(date), 'PPP')}
        </p>
      </div>
      <h3 class="mb-3 text-xl font-bold leading-none sm:text-2xl">
        {title}
      </h3>
      <p class="m-0 text-gray-800 py-3">
        <slot />
      </p>
      <div class="flex items-center">
        <a
          {href}
          aria-label=""
          class="inline-flex text-lg underline items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Read More
          <svg
            class="inline-block w-2 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
