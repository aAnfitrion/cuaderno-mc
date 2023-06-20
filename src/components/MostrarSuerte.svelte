<script lang="ts">
	export let suerte: string;
</script>

{#if suerte === 'tronco_de_roble'}
	<div class={`bg-[url($assets/tronco_de_roble.png)] bg-cover w-24 h-24`} />
{:else if suerte === 'tronco_de_roble_oscuro'}
	<div class={`bg-[url($assets/tronco_de_roble_oscuro.png)] bg-cover w-24 h-24`} />
{:else if suerte === 'roca'}
	<div class={`bg-[url($assets/roca.png)] bg-cover w-24 h-24`} />
{:else if suerte === 'huevo_de_gallina'}
	<div class={`bg-[url($assets/huevo_de_gallina.png)] bg-cover w-24 h-24`} />
{:else if suerte === 'chuleta_de_cerdo'}
	<div class={`bg-[url($assets/chuleta_de_cerdo.png)] bg-cover w-24 h-24`} />
{:else if suerte === 'filete_de_vaca'}
	<div class={`bg-[url($assets/filete_de_vaca.png)] bg-cover w-24 h-24`} />
{/if}
