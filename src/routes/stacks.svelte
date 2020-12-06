<script lang="typescript">
  import FeatureColumns from "./../components/tails/feature-columns.svelte";
  import Feature from "./../components/tails/feature.svelte";
  import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
  <title>Stacks | Full-Stack Developer</title>
</svelte:head>

<FeatureColumns>
  <Feature title="Kubernetes" image={faDharmachakra}>
    World-class deployment of containerized apps.
  </Feature>
  <Feature title="Svelte" image={faDharmachakra}>Lorem ipsum.</Feature>
  <Feature title="Tailwind CSS" image={faDharmachakra}>Lorem ipsum.</Feature>
</FeatureColumns>
