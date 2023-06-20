<script lang="ts">
	import { objetos } from '$lib/objetos';

	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let id: string, cantidad: number;

	const popupEpic: PopupSettings = {
		event: 'hover',
		target: id,
		placement: 'top'
	};
	
</script>

<div
	class={`col-span-1 h-16 w-16 border-r border-b border-surface-500 flex items-end justify-end p-1 [&>*]:pointer-events-none inline-block`}
	use:popup={popupEpic}
>
	<img src={`/img/${id}.png`} alt={id} />

	{#if cantidad !== 0}
		<span class="badge bg-primary-500 z-10 absolute">
			{cantidad}
		</span>
	{/if}
	<div class="card p-4 variant-filled-surface" data-popup={id}>
		{#each objetos as compar}
			{#if compar.id === id}
				<h5 class="h5 font-semibold">{compar.nombre}</h5>
				{#if compar.rareza === 1}
					<p class="font-semibold italic text-surface-300">Común</p>
				{:else if compar.rareza === 2}
					<p class="font-semibold italic text-secondary-500">Raro</p>
				{:else if compar.rareza === 3}
					<p class="font-semibold italic text-success-500">Raro</p>
				{:else if compar.rareza === 4}
					<p class="font-semibold italic text-tertiary-500">Raro</p>
				{:else if compar.rareza === 5}
					<p class="font-semibold italic text-error-500">Raro</p>
				{/if}
				<p class="text-sm">Valor: {compar.valor} esmeraldas</p>
			{/if}
		{/each}
		<div class="arrow variant-filled-surface" />
	</div>
</div>
