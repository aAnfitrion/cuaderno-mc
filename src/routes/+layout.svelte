<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { encontrarProgreso } from '$lib/handleProgresion';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { desbloqueoStore } from '$lib/stores';
	import type { des } from '$lib/tipos';
	let desbloqueo: des[];
	if ($desbloqueoStore) {
		if (typeof $desbloqueoStore === 'string') {
			desbloqueo = JSON.parse($desbloqueoStore);
		}
	} else {
		desbloqueo = [];
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">CuardernoMC</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail" />
		</AppBar>
	</svelte:fragment>
	<div
		class="bg-surface-700 flex justify-center my-8 max-w-screen-md mx-auto rounded-lg font-semibold"
	>
		<a href="/" class="btn"> Inventario </a>
		<a href="/mesa-de-crafteo" class="btn"> Mesa de crafteo </a>
		{#if encontrarProgreso(desbloqueo, 'aldeanos')}
			<a href="/aldeanos" class="btn"> Aldeanos </a>
		{/if}
	</div>
	<slot />
</AppShell>
