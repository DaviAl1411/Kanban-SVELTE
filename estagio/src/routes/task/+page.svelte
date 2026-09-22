<script lang="ts">
    import Task from '$lib/components/Task.svelte';
    let { data } = $props();
</script>

<h1>Tasks</h1>


<form method="GET">
    <select name="status" value= {data.status ?? ""}>
        <option value="">Todas</option>
        <option value="TODO">A fazer</option>
        <option value="DOING">Em andamento</option>
        <option value="DONE">Concluída</option>
    </select>

    <button type="submit">Filtrar Status</button>

    <select name="priority" value= {data.priority ?? ""}>
        <option value="">Todas</option>
        <option value="LOW">Baixa</option>
        <option value="MEDIUM">Média</option>
        <option value="HIGH">Alta</option>
    </select>

    <button type="submit">Filtrar Prioridade</button>
</form>

{#each data.tasks as task}
    <Task {task} />
{/each}