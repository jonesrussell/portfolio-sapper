<script context="module" lang="ts">
  export async function preload(this: any, _page: any, session: any) {
    const { BLOG_URL } = session;
    const res = await this.fetch(BLOG_URL);
    const posts = await res.json();

    return { posts };
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
  <h1>Recent posts</h1>

  <ul>
    {#each posts.items as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <div><a rel="prefetch" href={`/blog/${post.id}`}>{post.title}</a></div>
        <div><time>{post.date_published}</time></div>
      </li>
    {/each}
  </ul>
</section>
