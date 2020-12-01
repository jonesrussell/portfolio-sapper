<script context="module" lang="typescript">
  export function preload(this: any, {}) {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: { slug: string; title: string; html: any }[]) => {
        return { posts };
      });
  }
</script>

<script lang="typescript">
  export let posts: { slug: string; title: string; html: any }[];
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="prose lg:prose-xl">
  <h1>Recent posts</h1>

  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
    {/each}
  </ul>
</section>
