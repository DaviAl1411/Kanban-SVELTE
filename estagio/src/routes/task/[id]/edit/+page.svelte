<script lang="ts">
    let { form,data } = $props();
</script>

<h1>Editar tarefa</h1>

<form method="POST">
    <label>
        Título
        <input 
        name="title"
        value={data.task.title} 
        />
    </label>

    <label>
        Descrição
        <textarea name="description">{data.task.description}</textarea>
    </label>

    <label>
        Prioridade
        <select name="priority"
        value={data.task.priority || "LOW"}>
            <option value="LOW">Baixa</option>
            <option value="MEDIUM">Média</option>
            <option value="HIGH">Alta</option>
        </select>
    </label>

    <label>
        Status
        <select name="status"
        value={data.task.status|| "TODO"}>
            <option value="TODO">A fazer</option>
            <option value="DOING">Em andamento</option>
            <option value="DONE">Concluída</option>
        </select>
    </label>

    <label>
        Tecnologia
         <select name="technologyId"
            value={data.task.technologyId }>
            <option value="">Selecione uma tecnologia</option>
            {#each data.techs as tech }
                <option value={tech.id}>{tech.name}</option>
            {/each}
        </select>
    </label>

    <button type="submit">Editar tarefa</button>
</form>

{#if form?.message}
    <p style="color: red">{form.message}</p>
{/if}