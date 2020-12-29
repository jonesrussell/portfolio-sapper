<script context="module" lang="typescript">
  export function preload(page: any, session: any) {
    const { BELL_CREEK_URL } = session;
    const href: string = BELL_CREEK_URL;
    return { href };
  }
</script>

<script lang="typescript">
  import ContentBrowser from "../components/tails/content-browser.svelte";

  export let href: string;
</script>

<svelte:head>
  <title>Projects | Full Stack Developer</title>
</svelte:head>

<header>
  <h1>Projects</h1>
</header>

<section>
  <ContentBrowser
    title="Interactive Animation"
    subtitle="Beautiful animation with SVG and JavaScript"
    cta="Enlarge"
    {href}>
    <span slot="media"><iframe
        src={href}
        title="SVG Animation"
        class="w-full h-64 overflow-hidden" /></span>
    Learn how gold is processed from ore into dore bars in this interacive
    animation with embedded video.
  </ContentBrowser>
</section>
