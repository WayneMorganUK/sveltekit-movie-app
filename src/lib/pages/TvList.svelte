<script lang="ts">
	import TvCard from '$lib/components/TvCard.svelte';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data;
	let TvData = data as TvType[];
</script>

<section
	id="tv-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#if data}
		{#each TvData as datum}
			<TvCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
