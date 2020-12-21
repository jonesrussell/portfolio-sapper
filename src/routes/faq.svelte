<script lang="typescript">
  import FaqList from "./../components/tails/faq-list.svelte";
  import FaqItem from "../components/tails/faq-item.svelte";
</script>

<svelte:head>
  <title>FAQ | Russell Jones</title>
</svelte:head>

<FaqList>
  <FaqItem question="What is 12 Factor?">
    <p>12 factor is ....</p>
  </FaqItem>

  <FaqItem question="What the heck is 'npm isntal'?">
    <p>
      Have a look at
      <a
        href="https://github.com/npm/cli/blob/2b8b9bdbc3606772dc7f7b3a95b7ba3c572b4e98/lib/utils/cmd-list.js#L26-L63">cmd-list.js</a>
      on GitHub.
    </p>
  </FaqItem>

  <FaqItem question="What is PATH?">Bar</FaqItem>
</FaqList>
