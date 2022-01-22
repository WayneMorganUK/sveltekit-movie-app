<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, params }) {
		media_type.set('movie');
		const movie_res = await fetch('../api/postMovie', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: params.id
			})
		});
		const movie = await movie_res.json();
		const movie_details = await movie.res;
		const trailer_res = await fetch('../api/postTrailer', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: params.id
			})
		});
		const trailer = await trailer_res.json();
		const trailer_details = trailer.res.results;
		const cast_res = await fetch('../../api/postCast', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				id: params.id,
				media: 'movie'
			})
		});
		const cast = await cast_res.json();
		const cast_details = await cast.res.cast;
		return {
			props: {
				movie_details,
				trailer_details,
				cast_details
			}
		};
	}
</script>

<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';
	export let movie_details: MovieType;
	export let trailer_details: TrailerType[];
	export let cast_details: CastType[];
</script>

<MovieMedia {movie_details} {trailer_details} {cast_details} />
