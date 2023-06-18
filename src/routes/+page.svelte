<script lang="ts">
	import MesaDeCrafteo from '$components/MesaDeCrafteo.svelte';
	import Ranura from '$components/Ranura.svelte';

	import { handle, rand, encontrarCantidad, restarObjetos } from '$lib/handleInv';

	let inventario = [{ id: 'tronco_de_roble', cantidad: 0 }];

	let accion = true;

	function reposo(tiempo: number) {
		accion = false;
		function activar() {
			accion = true;
		}
		setTimeout(activar, tiempo);
	}

	import { Motion, useMotionValue, animate } from 'svelte-motion';

	const rotate = useMotionValue(0);
	let animation = {};
	const click = () => {
		if (animation.stop) {
			animation.stop();
			animation = {};
		} else {
			animation = animate(rotate, rotate.get() + 360, {
				type: 'spring',
				duration: 100,
				stiffness: 100,
				onComplete: (v) => {
					animation = {};
				}
			});
		}
	};

	let objetoSuerte: string;
	let desbloquearCrafteos: boolean;
	let velocidadDeTalado = 1200;

	function handleLog() {
		reposo(velocidadDeTalado);
		const randy = rand();
		if (randy >= 1 && randy <= 8) {
			handle(inventario, 'tronco_de_roble', 1);
			objetoSuerte = 'tronco_de_roble';
		} else {
			handle(inventario, 'tronco_de_roble_oscuro', 1);
			objetoSuerte = 'tronco_de_roble_oscuro';
		}
		inventario = inventario;
		click();

		if (encontrarCantidad(inventario, 'tronco_de_roble_oscuro', 3)) {
			desbloquearCrafteos = true;
		}
	}

	import { recetas } from '$lib/recetas';

	let recetaSeleccionada: string;

	function crear() {
		if (recetaSeleccionada === 'hacha_de_madera') {
			const v1 = encontrarCantidad(inventario, 'tronco_de_roble_oscuro', 3);
			const v2 = encontrarCantidad(inventario, 'tronco_de_roble', 2);
			if (v1 && v2) {
				restarObjetos(inventario, 'tronco_de_roble_oscuro', 3);
				restarObjetos(inventario, 'tronco_de_roble', 2);
				handle(inventario, 'hacha_de_madera', 1);
				velocidadDeTalado = 1100;
				inventario = inventario;
			}
		}
	}
</script>

<div class="grid grid-cols-12">
	<div class="col-span-2" />
	<div class="col-span-8">
		<div class="flex items-center justify-center pt-16">
			<div class="card flex">
				<div
					class="bg-[url(https://preview.redd.it/ehvgoqf2grd61.png?width=1920&format=png&auto=webp&s=d6cb17f773a8c058957349fee592e906437176ba)] bg-cover w-64 rounded-l-lg flex items-center justify-center"
				>
					<Motion style={{ rotate }} let:motion>
						<div class={`bg-[url($assets/${objetoSuerte}.png)] bg-cover w-24 h-24`} use:motion />
					</Motion>
				</div>
				<div class="">
					<header class="card-header border-b border-surface-500 p-4 text-end">
						<h3 class="h3 font-semibold">Inventario</h3>
					</header>
					<section class="grid grid-cols-9">
						{#each inventario as epic}
							{#if epic.cantidad !== 0}
								<Ranura id={epic.id} cantidad={epic.cantidad} />
							{/if}
						{/each}
					</section>
					<footer class="card-footer border-t border-surface-500 flex items-center p-4">
						{#if accion === true}
							<button
								class="btn btn-sm variant-filled-warning font-semibold"
								type="button"
								on:click={handleLog}
							>
								Talar arboles
							</button>
						{:else}
							<button
								class="btn btn-sm variant-filled-warning font-semibold"
								type="button"
								on:click={handleLog}
								disabled
							>
								Talar arboles
							</button>
						{/if}
					</footer>
				</div>
			</div>
		</div>
		{#if desbloquearCrafteos}
			<div class="flex items-center justify-center pt-8">
				<div class="card flex">
					<div class="grid grid-cols-4 gap-2 p-4">
						{#each recetas as receta}
							{#if receta.id === recetaSeleccionada}
								<MesaDeCrafteo
									x1={receta.y1}
									x2={receta.y2}
									x3={receta.y3}
									x4={receta.y4}
									x5={receta.y5}
									x6={receta.y6}
									x7={receta.y7}
									x8={receta.y8}
									x9={receta.y9}
									resultado={receta.id}
								/>
							{:else}
								<MesaDeCrafteo x1="" x2="" x3="" x4="" x5="" x6="" x7="" x8="" x9="" resultado="" />
							{/if}
						{/each}
						<button
							type="button"
							class="btn variant-ghost-success rounded-lg col-span-1 h-16 w-16 text-sm font-semibold"
							on:click={crear}
						>
							Craftear
						</button>
					</div>
					<div class="border-l border-surface-500">
						<header class="card-header border-b border-surface-500 p-4">
							<h3 class="h3 font-semibold text-end">Mesa de crafteo</h3>
						</header>
						<section class="grid grid-cols-7 gap-2 p-2">
							<button
								class="btn variant-ghost-surface col-span-1 h-16 w-16 rounded-lg bg-[url($assets/hacha_de_madera.png)] bg-cover"
								type="button"
								on:click={() => (recetaSeleccionada = 'hacha_de_madera')}
							/>
						</section>
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="col-span-2" />
</div>
