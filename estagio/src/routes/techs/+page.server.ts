import type { PageServerLoad } from "./$types";
import { techs } from "$lib/data/mock";

export const load: PageServerLoad = () => {
    return {
        techs
    }
}