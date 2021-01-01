<script context="module">
  export const preload = () => {};
</script>

<script lang="typescript">
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string = "home";
</script>

<style>
  .hero-home {
    height: 400px;
  }

  .hero-bg {
    /* background-image: url('undraw_mobile_images_rc0q.svg'); */
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
</style>

<Nav {segment} />

<section class="relative block bg-red-300 hero-home">
  <div class="absolute top-0 w-full h-full bg-left bg-cover hero-bg">
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

<main class="relative py-16 bg-gray-300  bg-left bg-no-repeat hero-bg">
  <div class="container mx-auto px-4 max-w-screen-lg">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div class="px-6">
        <slot />
      </div>
    </div>
  </div>
</main>

<Footer year={2020} />
