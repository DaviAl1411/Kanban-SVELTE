import type { PageServerLoad } from "./$types";
import { tasks } from "$lib/data/mock";

export const load: PageServerLoad = () => {
    return {
        tasks
    }
}