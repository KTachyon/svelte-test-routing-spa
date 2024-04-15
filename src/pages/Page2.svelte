<script lang="ts">
  import { getNextPage } from "../lib/routing";

  export let currentRoute: { name: string };
</script>

<p>Second page</p>
<button on:click={() => getNextPage(currentRoute.name)}>Next</button>