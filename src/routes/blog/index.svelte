<script context="module" lang="ts">
  import ContentCard from './../../components/tails/content-card.svelte';
  import BlogPosts from './../../components/tails/blog-posts.svelte';

  export function preload() {
    return this.fetch(`feed.json`)
      .then((r) => r.json())
      .then((feed) => {
        const firstPost = feed.items.shift();
        const secondPost = feed.items.shift();
        const thirdPost = feed.items.shift();
        const fourthPost = feed.items.shift();
        return { firstPost, secondPost, thirdPost, fourthPost, feed };
      });
  }
</script>

<script lang="ts">
  import { format } from 'date-fns';

  export let firstPost: {
    id: string;
    image: string;
    title: string;
    content_text: string;
    content_html: string;
    date_published: string;
    tags: string[];
  };

  export let secondPost: {
    id: string;
    image: string;
    title: string;
    content_text: string;
    content_html: string;
    date_published: string;
    tags: string[];
  };

  export let thirdPost: {
    id: string;
    image: string;
    title: string;
    content_text: string;
    content_html: string;
    date_published: string;
    tags: string[];
  };

  export let fourthPost: {
    id: string;
    image: string;
    title: string;
    content_text: string;
    content_html: string;
    date_published: string;
    tags: string[];
  };

  export let feed: {
    version: string;
    description: string;
    home_page_url: string;
    feed_url: string;
    items: {
      id: string;
      image: string;
      title: string;
      content_text: string;
      content_html: string;
      date_published: string;
      tags: string[];
    }[];
  };

  function trunc(text: string, max: number) {
    return text.substr(0, max - 1) + (text.length > max ? '&hellip;' : '');
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="mb-10">
  <h1>Blog</h1>

  <ContentCard
    date={firstPost.date_published}
    title={firstPost.title}
    href={`/blog/${firstPost.id}`}
  >
    {@html trunc(firstPost.content_text, 125)}
  </ContentCard>

  <BlogPosts {secondPost} {thirdPost} {fourthPost} />

  <ul>
    {#each feed.items as { id, title, date_published }}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li class="mb-8">
        <h2><a rel="prefetch" href={`/blog/${id}`}>{title}</a></h2>
        <div>
          <time>{format(new Date(date_published), 'PPP')}</time>
        </div>
      </li>
    {/each}
  </ul>
</section>
