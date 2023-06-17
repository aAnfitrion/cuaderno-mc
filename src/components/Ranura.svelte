<script lang="ts">
	import { objetos } from '$lib/objetos';

	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};

	export let id: string, cantidad: number;
</script>

<div
	class={`col-span-1 h-16 w-16 border-r border-b border-surface-500 bg-[url($assets/${id}.png)] bg-cover flex items-end justify-end p-1`}
	use:popup={popupHover}
>
	{#if cantidad !== 0}
		<span class="badge variant-filled-warning">
			{cantidad}
		</span>
	{/if}
	<div class="card p-4 variant-filled-surface" data-popup="popupHover">
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
			{/if}
		{/each}
		<div class="arrow variant-filled-surface" />
	</div>
</div>
