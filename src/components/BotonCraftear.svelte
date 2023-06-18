<script lang="ts">
  export let recetaSeleccionada: string;
  export let id: string;
</script>

<button
	class={`btn variant-ghost-surface col-span-1 h-16 w-16 rounded-lg bg-[url($assets/${id}.png)] bg-cover`}
	type="button"
	on:click={() => (recetaSeleccionada = id)}
/>
