import { error } from '@sveltejs/kit';
import { tasks } from '$lib/data/mock';

export function buscarTask(id: string) {
    const task = tasks.find(
        (task) => task.id === Number(id)
    );

    if (!task) {
        error(404, 'Tarefa não encontrada');
    }

    return task;
}