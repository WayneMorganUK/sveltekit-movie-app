<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data;
	let MovieData = data as MovieType[];
</script>

<section
	id="movie-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#if data}
		{#each MovieData as datum}
			<MovieCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
