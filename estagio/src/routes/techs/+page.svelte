<script lang="ts">
    import Techs from '$lib/components/Techs.svelte';
    let { data } = $props();
</script>

<h1>Tecnologias</h1>

{#each data.techs as tech}
    <Techs {tech} />
{/each}