<script lang="typescript">
  import FeatureColumns from "./../components/tails/feature-columns.svelte";
  import FeatureGroup from "./../components/tails/feature-group.svelte";
  import Feature from "./../components/tails/feature.svelte";
  import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
  import {
    faDrupal,
    faLaravel,
    faPhp,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<svelte:head>
  <title>Stacks | Full-Stack Developer</title>
</svelte:head>

<FeatureColumns>
  <FeatureGroup>
    <Feature title="Kubernetes" icon={faDharmachakra}>
      World-class deployment of containerized apps.
    </Feature>
    <Feature title="Svelte" icon={faDharmachakra}>Lorem ipsum.</Feature>
    <Feature title="Tailwind CSS" icon={faDharmachakra}>Lorem ipsum.</Feature>
  </FeatureGroup>
  <FeatureGroup>
    <Feature title="PHP" icon={faPhp}>Lorem ipsum.</Feature>
    <Feature title="Drupal" icon={faDrupal}>Lorem Ipsum.</Feature>
    <Feature title="Laravel" icon={faLaravel}>Lorem ipsum.</Feature>
  </FeatureGroup>
</FeatureColumns>
