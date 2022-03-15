<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';

	export let movie_details: MovieType;
	export let trailer_details: TrailerType[];
	export let cast_details: CastType[];
</script>

<MovieMedia {movie_details} {trailer_details} {cast_details} />
