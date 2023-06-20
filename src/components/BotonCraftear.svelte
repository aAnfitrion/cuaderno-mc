<script lang="ts">
  export let recetaSeleccionada: string;
  export let id: string;
</script>

<button
	class={`variant-ghost-surface col-span-1 h-16 w-16 rounded-lg`}
	type="button"
	on:click={() => (recetaSeleccionada = id)}
>
	<img class="w-16 h-16" src={`src/assets/${id}.png`} alt={id} />
</button>
