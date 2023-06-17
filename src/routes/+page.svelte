<script lang="ts">
	import Ranura from '$components/Ranura.svelte';

	import { handle, rand } from '$lib/handleInv';

	let inventario = [{ id: 'tronco_de_roble', cantidad: 0 }];

	let accion = true;

	function reposo(tiempo: number) {
		accion = false;
		function activar() {
			accion = true;
		}
		setTimeout(activar, tiempo);
	}

	function handleLog() {
		reposo(0);
		const randy = rand();
		if (randy >= 1 && randy <= 8) {
			handle(inventario, 'tronco_de_roble', 1);
		} else {
			handle(inventario, 'tronco_de_roble_oscuro', 1);
		}
		inventario = inventario;
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
					Epics
				</div>
				<div class="">
					<header class="card-header border-b border-surface-500">
						<h4 class="h3 font-semibold leading-relaxed">Inventario</h4>
					</header>
					<section class="grid grid-cols-9">
						{#each inventario as epic}
							{#if epic.cantidad !== 0}
								<Ranura id={epic.id} cantidad={epic.cantidad} />
							{:else}
								<Ranura id="" cantidad={0} />
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
	</div>
	<div class="col-span-2" />
</div>
