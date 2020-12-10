<script context="module" lang="typescript">
  export async function preload(this: any, session: any, {}) {
    const { BLOG_URL } = session;

    return this.fetch(BLOG_URL)
      .then((res: { json: () => any }) => res.json())
      .then(
        (
          posts: {
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
          }[]
        ) => {
          return { posts };
        }
      );
  }
</script>

<script lang="typescript">
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
    {#each posts.items as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li><a rel="prefetch" href={post.id}>{post.title}</a></li>
    {/each}
  </ul>
</section>
