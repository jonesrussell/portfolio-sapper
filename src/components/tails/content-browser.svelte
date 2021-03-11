<script lang="ts">
  export let title: string = 'Awesome Features';
  export let subtitle: string = 'Awesome Features<br />for Everyone to Enjoy.';
  export let cta: string = 'View All Features';
  export let href: string = '#';
</script>

<div class="px-8 my-4 mx-auto pb-8 flex items-center min-w-screen bg-white">
  <div class="relative md:w-1/2 h-full pl-12">
    <p class="text-sm uppercase font-bold text-indigo-500 tracking-wide">
      {title}
    </p>
    <h2 class="text-4xl font-bold text-gray-900 mt-5 leading-tight">
      {@html subtitle}
    </h2>
    <p class="text-gray-800 text-base mt-3 pr-4">
      <slot />
    </p>
    <a
      {href}
      class="underline font-medium flex items-center text-indigo-500 mt-8"
    >
      <span>{cta}</span>
      <svg
        class="w-4 h-4 ml-1 mt-1 transform -rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  </div>
  <div class="w-1/2 screenshot">
    <div
      class="flex flex-col overflow-hidden shadow-2xl rounded-lg image-container"
    >
      <div class="h-8 bg-gray-900 text-white flex items-center">
        <div class="w-3 h-3 rounded-full ml-3 bg-red-400" />
        <div class="w-3 h-3 rounded-full ml-2 bg-yellow-400" />
        <div class="w-3 h-3 rounded-full ml-2 bg-green-400" />
      </div>
      <slot name="media" />
    </div>
  </div>
</div>

<style>
  .screenshot {
    --transform: rotate3d(0.5, -0.866, 0, 19deg);
    --shadow: 34.3px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
      20.6px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
    --lighting-angle: 300deg;
  }

  .screenshot .image-container {
    transform: var(--transform);
    box-shadow: var(--shadow);
    transition-property: -webkit-transform, -webkit-box-shadow;
    transition-property: transform, box-shadow;
    transition-property: transform, box-shadow, -webkit-transform,
      -webkit-box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
</style>
