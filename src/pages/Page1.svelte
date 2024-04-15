<script lang="ts">
  import { getNextPage, getPage } from "../lib/routing";

  export let currentRoute: { name: string };
</script>

<p>First page</p>
<button on:click={() => getNextPage(currentRoute.name)}>Next</button>
<button on:click={() => getPage('/page3')}>Skip</button>