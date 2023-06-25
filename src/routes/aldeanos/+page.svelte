<script lang="ts">
	import { inventarioStore, aldeanosStore } from '$lib/stores';
	import type { inv } from '$lib/handleInv';
	import type { ald, aldeanosDetalles } from '$lib/aldeanos';

	let inventario: inv[];
	let aldeanos: ald[];
	if ($inventarioStore) {
		if (typeof $inventarioStore === 'string') {
			inventario = JSON.parse($inventarioStore);
		}
	} else {
		inventario = [];
	}

	if ($aldeanosStore) {
		if (typeof $aldeanosStore === 'string') {
			aldeanos = JSON.parse($aldeanosStore);
		}
	} else {
		aldeanos = [];
	}


  const cl = console.log(1)
  let epic
  $: {
    clearInterval(epic);
    epic = setInterval(cl, 500)
  }
</script>

<div class="grid grid-cols-12 gap-2">
	<div class="col-span-3 card ml-2">
		<header class="card-header p-4">
			<h3 class="h3 font-semibold text-center">Estadisticas</h3>
		</header>
		<section class="p-4">
			{#each aldeanos as aldeano}
				{#if aldeano.id === 'aldeano_lenador'}
					<p class="flex gap-4">
						<span class="font-semibold">Cantidad de aldeanos:</span>
						{aldeano.cantidad}
						{#if (aldeano.cantidad = 1)} aldeano {:else} aldeanos {/if}
					</p>
					<p class="flex gap-4">
						<span class="font-semibold">Ingresos /s:</span>
						{(aldeano.cantidad / (1200 / 1000)).toFixed(2)} troncos
					</p>
					<p class="flex gap-4">
						<span class="font-semibold">Nivel de aldeanos:</span>
						{aldeano.nivel}
					</p>
				{/if}
			{/each}
		</section>
	</div>
	<div class="col-span-6 card">
		<header class="card-header p-4 border-b border-surface-500">
			<h1 class="h3 font-semibold text-center">Aldeanos</h1>
		</header>
		<section
			class="bg-[url(https://i.pinimg.com/originals/cd/b2/a3/cdb2a3ce8d13a227342a8a6674cec071.jpg)] bg-cover bg-center min-h-48"
		>
			<div class="grid grid-cols-6">
				{#each aldeanos as aldeano}
					<img
						class="col-span-1 p-8"
						src="/img/aldeanos/aldeano_lenador.png"
						alt="Aldeano Leñador"
					/>
				{/each}
			</div>
		</section>
	</div>
	<div class="col-span-3" />
</div>
