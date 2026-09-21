<script lang="ts">
    let { data } = $props();
</script>

<p>Id: {data.task.id}</p>
<p>Title: {data.task.title}</p>
<p>Description: {data.task.description}</p>
<p>Status: {data.task.status}</p>