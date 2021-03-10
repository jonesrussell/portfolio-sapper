<script lang="ts">
  import BlogPost from './blog-post.svelte';

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

  // Get first image from each post
  const regex = /<img.*?\/>/;
  const secondImg = `${secondPost.content_html.match(regex)}`;
  const thirdImg = `${thirdPost.content_html.match(regex)}`;
  const fourthImg = `${fourthPost.content_html.match(regex)}`;

  function trunc(text: string, max: number) {
    return text.substr(0, max - 1) + (text.length > max ? '&hellip;' : '');
  }
</script>

<div class="py-6">
  <div
    class="flex flex-col justify-center items-center container px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8"
  >
    <div
      class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
    >
      <BlogPost
        img={secondImg}
        title={secondPost.title}
        date={new Date(secondPost.date_published)}
        href="/blog/{secondPost.id}"
      >
        {@html trunc(secondPost.content_text, 75)}
      </BlogPost>
      <BlogPost
        img={thirdImg}
        title={thirdPost.title}
        date={new Date(thirdPost.date_published)}
        href="/blog/{thirdPost.id}"
      >
        {@html trunc(thirdPost.content_text, 75)}
      </BlogPost>
      <BlogPost
        img={fourthImg}
        title={fourthPost.title}
        date={new Date(fourthPost.date_published)}
        href="/blog/{fourthPost.id}"
      >
        {@html trunc(fourthPost.content_text, 75)}
      </BlogPost>
    </div>
  </div>
</div>
