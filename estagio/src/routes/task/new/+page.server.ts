import { tasks } from "$lib/data/mock";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const status = formData.get("status");
        const priority = formData.get("priority");
        const technologyId = formData.get("technologyId");
        
        if (!title || !description || !status || !priority || !technologyId) {
            return fail(400, { 
                message: "Todos os campos são obrigatórios", 
                title:title,
                description:description,
                status:status,
                priority:priority,
                technologyId:technologyId
            });
        }

        tasks.push({
            id: tasks.length + 1,
            title: title as string,
            description: description as string,
            priority: priority as 'LOW' | 'MEDIUM' | 'HIGH',
            status: status as 'TODO' | 'DOING' | 'DONE',
            technologyId: Number(technologyId)
        })
        throw redirect(303, "/task");
    }
};