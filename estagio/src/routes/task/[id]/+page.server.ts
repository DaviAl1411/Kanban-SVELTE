import { tasks } from "$lib/data/mock";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    const task = tasks.find((t) => t.id === Number(params.id));
    if (!task){
        error(404, "Task not found");
    }
    return {
        task
    };
}