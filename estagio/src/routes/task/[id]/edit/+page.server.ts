import { buscarTask } from "$lib/services/+page.server"
import { fail, redirect, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"
import { techs } from "$lib/data/mock"

export const load: PageServerLoad = ({ params }) => {
    const task = buscarTask(params.id)
    return {
        task,
        techs
    }
}

export const actions: Actions = {
    default: async ({ request,params }) => {
         if (!params.id) {
            return fail(400, {
                message: 'ID da tarefa não informado'
            });
        }

        const task = buscarTask(params.id);
        const formData = await request.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const status = formData.get("status");
        const priority = formData.get("priority");
        const technologyId = formData.get("technologyId");
        if (
        typeof title !== "string" ||
        typeof description !== "string" ||
        typeof status !== "string" ||
        typeof priority !== "string" ||
        typeof technologyId !== "string"
    ) {
        return fail(400, {
            message: "Todos os campos são obrigatórios"
        });
    }

        task.title = title;
        task.description = description;
        task.priority = priority as 'LOW' | 'MEDIUM' | 'HIGH';
        task.status = status as 'TODO' | 'DOING' | 'DONE';
        task.technologyId = Number(technologyId);
        throw redirect(303, `/task/${params.id}`);
    }
};