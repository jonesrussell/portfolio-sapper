<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`feed.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: {
    version: string;
    description: string;
    home_page_url: string;
    feed_url: string;
    items: {
      id: string;
      title: string;
      content_html: string;
      summary: string;
      date_published: string;
      tags: string[];
    }[];
  }[];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="">
  <h1>Blog</h1>

  <ul>
    {#each posts.items as { id, title, date_published }}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li class="mb-8">
        <h2><a rel="prefetch" href={`/blog/${id}`}>{title}</a></h2>
        <div><time>{new Date(date_published).toString()}</time></div>
      </li>
    {/each}
  </ul>
</section>
