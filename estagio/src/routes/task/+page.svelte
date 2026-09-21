<script lang="ts">
    import Task from '$lib/components/Task.svelte';
    let { data } = $props();
</script>

<h1>Tasks</h1>

{#each data.tasks as task}
    <Task {task} />
{/each}