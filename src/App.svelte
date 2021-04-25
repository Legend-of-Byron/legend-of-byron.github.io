<script lang="ts">
  import Router from 'svelte-spa-router';
  import Home from './pages/Home/Home.svelte';
  import Chapter from './pages/Chapter.svelte';
  import NotFound from './pages/NotFound.svelte';

  const routes = {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    '/chapters/:chapter': Chapter,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound
}
</script>

<main>
	<Router routes={routes}/>
</main>