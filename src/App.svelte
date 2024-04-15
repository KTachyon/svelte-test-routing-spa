<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routesStore, loadRoutes } from './store/routesStore';
  import { onMount } from 'svelte';
  import { buildRoutes } from './lib/routing';

  onMount(loadRoutes);

  $: routes = buildRoutes($routesStore.routes);
  $: isLoading = $routesStore.routes.length === 0;
</script>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <Router {routes} />
{/if}
