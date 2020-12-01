<script lang="typescript">
  export let y: string;
  export let stroke: string;
  export let strokeWidth: string;
</script>

<line x1="0" x2="100%" y1={y} y2={y} {stroke} stroke-width={strokeWidth} />
