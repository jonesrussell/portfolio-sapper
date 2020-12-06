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

  <FaqItem question="What is PATH?">Bar</FaqItem>
</FaqList>
