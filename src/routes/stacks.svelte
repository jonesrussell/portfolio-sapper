<script lang="typescript">
  import FeatureColumns from "./../components/tails/feature-columns.svelte";
  import FeatureGroup from "./../components/tails/feature-group.svelte";
  import Feature from "./../components/tails/feature.svelte";
  import {
    faClipboard,
    faDharmachakra,
    faEdit,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faCss3,
    faDocker,
    faDrupal,
    faHtml5,
    faLaravel,
    faPhp,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<svelte:head>
  <title>Stacks | Full Stack Developer</title>
</svelte:head>

<FeatureColumns>
  <FeatureGroup>
    <Feature title="Kubernetes" icon={faDharmachakra}>
      World-class deployment of containerized apps.
    </Feature>
    <Feature title="Svelte" icon={faHtml5}>Lorem ipsum.</Feature>
    <Feature title="Tailwind CSS" icon={faCss3}>Lorem ipsum.</Feature>
  </FeatureGroup>
  <FeatureGroup>
    <Feature title="PHP" icon={faPhp}>Lorem ipsum.</Feature>
    <Feature title="Drupal" icon={faDrupal}>Lorem Ipsum.</Feature>
    <Feature title="Laravel" icon={faLaravel}>Lorem ipsum.</Feature>
  </FeatureGroup>
  <FeatureGroup>
    <Feature title="Visual Studio Code" icon={faClipboard}>
      A great editor with a rich plugin ecosystem.
    </Feature>
    <Feature title="Vim" icon={faEdit}>Lorem Ipsum.</Feature>
    <Feature title="Docker" icon={faDocker}>Lorem ipsum.</Feature>
  </FeatureGroup>
</FeatureColumns>
