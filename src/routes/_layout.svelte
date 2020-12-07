<script context="module">
  export const preload = () => {};
</script>

<script lang="typescript">
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<section class="relative block" style="height: 500px;">
  <div
    class="absolute top-0 w-full h-full bg-bottom bg-cover"
    style="background-image: url('indian_head_discovery_by_rhineville_d2zqv2d.jpg');">
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-50 bg-black" />
  </div>
  <div
    class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style="height: 70px; transform: translateZ(0px);">
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0">
      <polygon
        class="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100" />
    </svg>
  </div>
</section>

<main class="relative py-16 bg-gray-300">
  <div class="container mx-auto px-4">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div class="px-6">
        <slot />
      </div>
    </div>
  </div>
</main>

<Footer year={2020} />
