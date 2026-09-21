<script lang="ts">
    import type { Task } from "$lib/types/task";
    
    let { task } : {task: Task} = $props();
    
</script>

<a href="/task/{task.id}">[{task.id}] {task.title}<br></a>