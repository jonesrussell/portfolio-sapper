<script lang="typescript">
  import ContentBrowser from "../components/tails/content-browser.svelte";
</script>

<svelte:head>
  <title>Projects | Full-Stack Developer</title>
</svelte:head>

<header class="prose">
  <h1>Projects</h1>
</header>

<section>
  <ContentBrowser
    title="Interactive Animation"
    subtitle="Beautiful animation with SVG and JavaScript"
    cta="Enlarge"
    href="https://bell-creek.jonesrussell42.xyz">
    <span slot="media"><iframe
        src="https://bell-creek.jonesrussell42.xyz/"
        title="SVG Animation"
        class="w-full h-64 overflow-hidden" /></span>
    Learn how gold is processed from ore into dore bars in this interacive
    animation with embedded video.
  </ContentBrowser>
</section>
