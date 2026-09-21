<script lang="ts">
    import type { Card } from "$lib/types/card";
    
    let { card } : {card: Card} = $props();
</script>

<p>[{card.quantity}]</p>
<p>{card.title}</p>