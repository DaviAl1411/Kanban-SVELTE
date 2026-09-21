import { tasks,techs } from "$lib/data/mock";
import { error, fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { buscarTask } from "$lib/services/+page.server";

export const load: PageServerLoad = ({ params }) => {
    const task = buscarTask(params.id)
    const tech = techs.find((t) => t.id == task?.technologyId)
    if (!task){
        error(404, "Task not found");
    }
    return {
        task,
        tech
    };
}

export const actions: Actions = {
    delete: async ({params}) => {
        if (!params.id) {
            return fail(400, {
                message: 'ID da tarefa não informado'
            });
        }
        const index = tasks.findIndex((task) => task.id === Number(params.id))
        if (index === -1) {
            return fail(404, {
                message: "Tarefa não encontrada"
            });
        }
        tasks.splice(index,1)
        throw redirect(303, "/task");
    }
}