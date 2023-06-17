<script lang="ts">
	import Ranura from '$components/Ranura.svelte';

	let inventario = [{ id: 'tronco_de_roble', cantidad: 0 }];

	function setObjetos(json: any, id: string, nuevaCantidad: number) {
		for (let i = 0; i < json.length; i++) {
			if (json[i].id === id) {
				json[i].cantidad = json[i].cantidad + nuevaCantidad;
				return;
			}
		}
	}

	function handleLog() {
		let hay = 0;
		for (let i = 0; i < inventario.length; i++) {
			const element = inventario[i];
			if (element.id === 'tronco_de_roble') {
				hay = 1;
			}
		}
		if (hay === 0) {
			inventario.push({ id: 'tronco_de_roble', cantidad: 1 });
		} else {
			setObjetos(inventario, 'tronco_de_roble', 1);
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
					class="bg-[url(https://preview.redd.it/ehvgoqf2grd61.png?width=1920&format=png&auto=webp&s=d6cb17f773a8c058957349fee592e906437176ba)] bg-cover w-64 rounded-l-lg"
				>
					Epics
				</div>
				<div class="">
					<header class="card-header border-b border-surface-500">
						<h4 class="h3 font-semibold leading-relaxed">Inventario</h4>
					</header>
					<section class="grid grid-cols-9">
						{#each inventario as epic }
							{#if epic.cantidad !== 0}
								<Ranura id={epic.id} cantidad={epic.cantidad} />
							{:else}
								<Ranura id='' cantidad={0} />
							{/if}
						{/each}
					</section>
					<footer class="card-footer border-t border-surface-500 flex items-center p-4">
						<button
							class="btn btn-sm variant-filled-warning font-semibold"
							type="button"
							on:click={handleLog}
						>
							Talar arboles
						</button>
					</footer>
				</div>
			</div>
		</div>
	</div>
	<div class="col-span-2" />
</div>
