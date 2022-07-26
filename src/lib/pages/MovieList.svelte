<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	// import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data: MovieResult[];
</script>

<section
	id="movie-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each data as datum}
		<MovieCard {datum} />
	{/each}
</section>
