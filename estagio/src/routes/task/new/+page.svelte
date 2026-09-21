<script lang="ts">
    let { form }  = $props();
</script>

<h1>Nova tarefa</h1>

<form method="POST">
    <label>
        Título
        <input 
        name="title"
        value={form?.title || ""} 
        />
    </label>

    <label>
        Descrição
        <textarea name="description">{form?.description || ""}</textarea>
    </label>

    <label>
        Prioridade
        <select name="priority"
        value={form?.priority || "LOW"}>
            <option value="LOW">Baixa</option>
            <option value="MEDIUM">Média</option>
            <option value="HIGH">Alta</option>
        </select>
    </label>

    <label>
        Status
        <select name="status"
        value={form?.status || "TODO"}>
            <option value="TODO">A fazer</option>
            <option value="DOING">Em andamento</option>
            <option value="DONE">Concluída</option>
        </select>
    </label>

    <label>
        Tecnologia
        <select name="technologyId"
        value={form?.technologyId || ""}>
            <option value="">Selecione uma tecnologia</option>
            <option value="1">React</option>
            <option value="2">Vue</option>
            <option value="3">Angular</option>
        </select>
    </label>

    <button type="submit">Criar tarefa</button>
</form>

{#if form?.message}
    <p style="color: red">{form.message}</p>
{/if}