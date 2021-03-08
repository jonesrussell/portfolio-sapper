<script type="ts">
  import HomeHero from './../components/HomeHero.svelte';
</script>

<svelte:head>
  <title>Russell Jones | Full Stack Developer &amp; DevOps Expert</title>
  <meta name="title" value="North America's premier Full Stack Developer" />
  <meta
    name="description"
    value="With over 20 years experience in Wev Development and IT Management/DevOps, Russell Jones is a team leader, project manager, and expert coder."
  />
</svelte:head>

<div class="flex flex-wrap justify-center">
  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
    <div class="relative">
      <img
        alt="Cartoon of Russell Jones"
        src="cartoon-russell.jpg"
        class="shadow-xl rounded-full h-auto align-middle absolute -m-24 -ml-24 lg:-ml-24 transform-gpu delay-1000 animate-grow"
        style="max-width: 200px;"
      />
    </div>
  </div>
</div>
<div class="text-center mt-16 pt-16">
  <h1
    class="relative text-5xl font-bold leading-normal text-gray-800 mb-2 font-greeting delay-1000 transform-gpu animate-grow"
  >
    <span class="accent">Ahnii</span>, I'm Russell Jones
  </h1>
</div>

<HomeHero />

<style>
  .accent {
    text-decoration-line: underline;
    text-decoration-style: double;
  }
</style>
