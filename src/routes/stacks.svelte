<svelte:head>
  <title>Russell Jones</title>
</svelte:head>

<header class="flex justify-center">
  <h1 class="text-5xl page-title animated delay slideInDown">Ahnii!</h1>
</header>

<section class="grid">
  <div class="self-center justify-center col-start-1 row-start-1">
    <iframe
      title="Snapcraft"
      src="https://snapcraft.io/nvim/embedded?button=black&summary=true&screenshot=true"
      frameborder="0"
      width="100%"
      height="640px"
      style="border: 1px solid #cccccc; border-radius: 2px;" />
  </div>
  <!--
    transition duration-500 ease-in-out transform
  -->
  <div class="self-center justify-center col-start-1 row-start-1">
    <img
      style="display: none"
      class="w-56 m-auto rounded-full animated zoomIn"
      src="cartoon-russell.jpg"
      alt="Surprisingly accurate looking cartoon avatar of Russell Jones" />
  </div>
</section>
