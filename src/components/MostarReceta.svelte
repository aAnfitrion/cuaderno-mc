<script lang="ts">
	export let x1: string,
		x2: string,
		x3: string,
		x4: string,
		x5: string,
		x6: string,
		x7: string,
		x8: string,
		x9: string,
		permitir: boolean | undefined,
		resultado: string;
</script>

<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x1}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x2}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x3}.png)] bg-cover`}
/>
{#if permitir}
	<div class="col-span-1 h-16 w-16 btn rounded-lg text-sm variant-ghost-success font-semibold">
		Hecho!
	</div>
{:else if permitir === false}
	<div class="col-span-1 h-16 w-16 btn rounded-lg text-sm variant-ghost-error font-semibold">
		Error
	</div>
{:else if permitir === undefined}
	<div class="col-span-1 h-16 w-16" />
{/if}
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x4}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x5}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x6}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${resultado}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x7}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x8}.png)] bg-cover`}
/>
<div
	class={`col-span-1 h-16 w-16 border border-surface-500 bg-[url($assets/${x9}.png)] bg-cover`}
/>
