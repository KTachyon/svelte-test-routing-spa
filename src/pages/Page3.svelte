<script lang="ts">
  import { getPage } from "../lib/routing";
</script>

<p>Last page</p>
<button on:click={() => getPage('/')}>Go home</button>