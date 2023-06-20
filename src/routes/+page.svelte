<script lang="ts">
	import { Motion, useMotionValue, animate } from 'svelte-motion';
	import Ranura from '$components/Ranura.svelte';

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

	import { encontrarCantidad, type inv } from '$lib/handleInv';
	import { inventarioStore } from '$lib/inventario';
	import {
		randLog,
		nivelDeHacha,
		randRock,
		nivelDePico,
		nivelDeEspada,
		randMeat
	} from '$lib/handleRecursion';
	import MostrarSuerte from '$components/MostrarSuerte.svelte';

	let inventario: inv[];
	let objetoSuerte: string;

	if ($inventarioStore) {
		if (typeof $inventarioStore === 'string') {
			inventario = JSON.parse($inventarioStore);
		}
	} else {
		inventario = [];
	}

	let accion = true;
	let velocidadDeAccion: number;

	function reposo(tiempo: number) {
		accion = false;
		function activar() {
			accion = true;
		}
		setTimeout(activar, tiempo);
	}

	function handleTimber() {
		click();
		reposo(nivelDeHacha(velocidadDeAccion, inventario));
		objetoSuerte = randLog(inventario);
		inventario = inventario;
		$inventarioStore = JSON.stringify(inventario);
	}

	function handleMiner() {
		click();
		reposo(nivelDePico(velocidadDeAccion, inventario));
		objetoSuerte = randRock(inventario);
		inventario = inventario;
		$inventarioStore = JSON.stringify(inventario);
	}

	function handleHunt() {
		click();
		reposo(nivelDeEspada(velocidadDeAccion, inventario));
		objetoSuerte = randMeat(inventario);
		inventario = inventario;
		$inventarioStore = JSON.stringify(inventario);
	}
</script>

<div class="grid grid-cols-12">
	<div class="col-span-2" />
	<div class="col-span-8">
		<div class="flex items-center justify-center">
			<div class="card flex">
				<div
					class="bg-[url(https://preview.redd.it/ehvgoqf2grd61.png?width=1920&format=png&auto=webp&s=d6cb17f773a8c058957349fee592e906437176ba)] bg-cover w-64 rounded-l-lg flex items-center justify-center"
				>
					<Motion style={{ rotate }} let:motion>
						<div use:motion>
							<MostrarSuerte suerte={objetoSuerte} />
						</div>
					</Motion>
				</div>
				<div class="">
					<header class="card-header border-b border-surface-500 p-4 text-center">
						<h3 class="h3 font-semibold">Inventario</h3>
					</header>
					<section class="grid grid-cols-9">
						{#if $inventarioStore == ''}
							<Ranura id="" cantidad={0} />
						{:else}
							{#each inventario as dato}
								<Ranura id={dato.id} cantidad={dato.cantidad} />
							{/each}
						{/if}
					</section>
					<footer class="card-footer border-t border-surface-500 flex items-center gap-2 p-4">
						{#if accion}
							<button
								type="button"
								class="btn btn-sm variant-filled-surface font-semibold"
								on:click={handleTimber}
							>
								Talar arboles
							</button>
							{#if encontrarCantidad(inventario, 'pico_de_madera', 1)}
								<button
									type="button"
									class="btn btn-sm variant-filled-surface font-semibold"
									on:click={handleMiner}
								>
									Minar en la cueva
								</button>
							{/if}
							{#if encontrarCantidad(inventario, 'espada_de_piedra', 1)}
								<button
									type="button"
									class="btn btn-sm variant-filled-surface font-semibold"
									on:click={handleHunt}
								>
									Cazar animales
								</button>
							{/if}
						{:else}
							<button
								type="button"
								class="btn btn-sm variant-filled-surface font-semibold"
								disabled
							>
								Reposando...
							</button>
						{/if}
					</footer>
				</div>
			</div>
		</div>
	</div>
	<div class="col-span-2" />
</div>
