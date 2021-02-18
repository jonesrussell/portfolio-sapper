<script context="module" lang="ts">
  export async function preload(this: any, params: any) {
    const id = params.id;
    // the `id` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${id}.json`);
    const data = await res.json();

    if (res.status !== 200) {
      this.error(res.status, data.message);
    }

    return { post: data };
  }
</script>

<script lang="ts">
  export let post: { id: string; title: string; content_html: any };
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
