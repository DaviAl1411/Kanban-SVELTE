<script lang="ts">
    let { data } = $props();
</script>

<p>Title: {data.task.title}</p>
<p>Description: {data.task.description}</p>

<p>Tech: {data.tech?.name}</p>
<p>Priority: {data.task.priority}</p>
<p>Status: {data.task.status}</p>

<a href={`/task/${data.task.id}/edit`}>Editar</a>
<form method="POST" action="?/delete">
    <button type="submit">Excluir</button>
</form>