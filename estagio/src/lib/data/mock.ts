import type { Card } from "$lib/types/card"
import type { Task } from "$lib/types/task";
import type { Tech } from "$lib/types/tech"

export const techs : Tech[] = [
    { id : 1, name:"TypeScript", percentage: 100, description: "TypeScript Arrays"},
    {id: 2, name: "Svelte", percentage: 80, description: "Svelte Components"},
    {id: 3, name: "AWS", percentage: 40, description: "AWS EC2"}
]

export const cards : Card[] = [
    { id: 1, title: "Tecnologias", quantity: 3 },
    { id: 2, title: "Tarefas Pendentes", quantity: 5 },
    { id: 3, title: "Tarefas Concluidas", quantity: 2 }
]

export const tasks: Task[] = [
    {
        id: 1,
        title: 'Estudar load function',
        description: 'Entender como funciona o load do SvelteKit',
        status: 'DONE',
        priority: 'HIGH',
        technologyId: 1
    },
    {
        id: 2,
        title: 'Estudar form actions',
        description: 'Aprender actions no servidor',
        status: 'DOING',
        priority: 'HIGH',
        technologyId: 1
    },
    {
        id: 3,
        title: 'Estudar interfaces',
        description: 'Praticar tipagem com TypeScript',
        status: 'TODO',
        priority: 'MEDIUM',
        technologyId: 2
    }
];