import { techs } from "$lib/data/mock";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    const tech = techs.find((t) => t.id === Number(params.id));
    if (!tech){
        error(404, "Tech not found");
    }
    return {
        tech
    };
}