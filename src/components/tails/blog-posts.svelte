<script type="ts">
  import BlogPost from './blog-post.svelte';
  export const pretitle = 'Latest Posts';
  export const posts = [];
</script>

<div class="bg-gray-100 py-12">
  <div
    class="flex flex-col justify-center items-center container px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8"
  >
    <div
      class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
    >
      <BlogPost post={posts[0]} />
      <BlogPost post={posts[1]} />
      <BlogPost post={posts[2]} />
    </div>
  </div>
</div>
