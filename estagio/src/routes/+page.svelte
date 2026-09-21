<script lang="ts">
    import DashBoardCard from '$lib/components/DashBoardCard.svelte';
    import Techs from '$lib/components/Techs.svelte';
    import { techs, cards } from '$lib/data/mock';



</script>

<h1>Welcome to SvelteKit</h1>
{#each cards as card }
   <DashBoardCard { card }/>
{/each}
{#each techs as tech}
    <Techs { tech }/>   
{/each}
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
