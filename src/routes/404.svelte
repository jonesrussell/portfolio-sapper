<script>
  import ErrorPage from "./_error.svelte";
</script>

<ErrorPage status={404} error={{ name: 'Error', message: 'Not found' }} />
