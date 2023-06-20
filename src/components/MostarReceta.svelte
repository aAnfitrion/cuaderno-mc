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

<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x1}.png`} alt={x1} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x2}.png`} alt={x2} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x3}.png`} alt={x3} />
</div>
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
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x4}.png`} alt={x4} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x5}.png`} alt={x5} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x6}.png`} alt={x6} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${resultado}.png`} alt={resultado} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x7}.png`} alt={x7} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x8}.png`} alt={x8} />
</div>
<div class={`col-span-1 h-16 w-16 border border-surface-500`}>
	<img src={`/img/${x9}.png`} alt={x9} />
</div>
