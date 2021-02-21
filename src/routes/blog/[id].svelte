<script context="module" lang="ts">
  export function preload(this: any, params: any) {
    const id = params.params.id;
    // the `id` parameter is available because
    // this file is called [id].svelte
    return this.fetch(`feed.json`)
      .then((r: any) => r.json())
      .then((feed: any) => {
        const post = feed.items.filter((item: any) => item.id == id)[0];

        // Convert images to full urls
        const regex = /src=\\*"(.*)\\*"/gi;
        post.content_html = post.content_html.replaceAll(
          regex,
          'src="https://blog.jonesrussell42.xyz$1"'
        );

        return { post };
      });
  }
</script>

<script lang="ts">
  export let post: {
    id: string;
    image: string;
    title: string;
    summary: string;
    content_text: string;
    content_html: any;
    url: string;
    tags: string[];
    date_published: string;
    date_modified: string;
    author: string;
  };
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<nav class="bg-grey-light p-5 rounded font-sans w-full m-4">
  <ol class="list-reset flex text-grey-dark">
    <li><a href="/" class="text-blue font-bold">Home</a></li>
    <li><span class="mx-2">/</span></li>
    <li><a href="/blog" class="text-blue font-bold">Blog</a></li>
    <li><span class="mx-2">/</span></li>
    <li>{post.title}</li>
  </ol>
</nav>

<h1>{post.title}</h1>

<article class="content">
  {@html post.content_html}
</article>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap');

  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  h1 {
    font-family: 'Open Sans';
    font-size: 2.5em;
    font-weight: 700;
    font-style: italic;
  }
</style>
