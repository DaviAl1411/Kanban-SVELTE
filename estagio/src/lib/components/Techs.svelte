<script lang="ts">
    import type { Tech } from "$lib/types/tech";
    import "$lib/styles/percentage.css"

    let { tech } : {tech: Tech} = $props();

    function getClass(percentage: number): string {
        if (percentage === 100) {
            return "concluded";
        } else if (percentage >= 50) {
            return "in-progress";
        } else {
            return "not-started";
        }
    }
</script>

<a href="/techs/{tech.id}" class={getClass(tech.percentage)}>{tech.name} - {tech.percentage}%  {tech.description}<br></a>