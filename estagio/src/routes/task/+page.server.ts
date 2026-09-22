import type { PageServerLoad } from "./$types";
import { tasks } from "$lib/data/mock";

export const load: PageServerLoad = ({url}) => {
    const status = url.searchParams.get("status")
    const priority = url.searchParams.get("priority")

    const tasksStatus = status
        ? tasks.filter((task) => task.status === status)
        : tasks;
    
    const tasksFiltradas = priority
        ? tasksStatus.filter((task) => task.priority === priority)
        : tasksStatus;
     

    return {
        tasks: tasksFiltradas,
        status,
        priority
    }
}