<script lang="ts">
	import { handleCraft } from '$lib/handleCraft';
	import { recetas } from '$lib/recetas';
	import BotonCraftear from '$components/BotonCraftear.svelte';
	import MostarReceta from '$components/MostarReceta.svelte';
	import { inventarioStore } from '$lib/inventario';
	import type { inv } from '$lib/handleInv';

	let inventario: inv[];

	if ($inventarioStore) {
		if (typeof $inventarioStore === 'string') {
			inventario = JSON.parse($inventarioStore);
		}
	} else {
		inventario = [];
	}

	let recetaSeleccionada: string;
	let permitir: boolean | undefined;

	function crear() {
		if (handleCraft(recetaSeleccionada, inventario)) {
			$inventarioStore = JSON.stringify(inventario);
			permitir = true;
		} else {
			permitir = false;
		}
	}
</script>

<div class="flex items-center justify-center pt-8">
	<div class="card flex">
		{#each recetas as receta}
			{#if receta.id === recetaSeleccionada}
				<div class="grid grid-cols-4 gap-2 p-4">
					<MostarReceta
						x1={receta.y1}
						x2={receta.y2}
						x3={receta.y3}
						x4={receta.y4}
						x5={receta.y5}
						x6={receta.y6}
						x7={receta.y7}
						x8={receta.y8}
						x9={receta.y9}
						{permitir}
						resultado={receta.id}
					/>
					<button
						type="button"
						class="btn variant-ghost-success rounded-lg col-span-1 h-16 w-16 text-sm font-semibold"
						on:click={crear}
					>
						Craftear
					</button>
				</div>
			{/if}
		{/each}
		<div class="border-l border-surface-500">
			<header class="card-header border-b border-surface-500 p-4">
				<h3 class="h3 font-semibold text-center">Mesa de crafteo</h3>
			</header>
			<section class="grid grid-cols-7 gap-2 p-2">
				{#each recetas as receta}
					<BotonCraftear id={receta.id} bind:recetaSeleccionada />
				{/each}
			</section>
		</div>
	</div>
</div>
