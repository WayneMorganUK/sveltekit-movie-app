<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, params }) {
		media_type.set('tv');
		const tv_res = await fetch('../api/getMovie', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: params.id
			})
		});
		const tv = await tv_res.json();
		const tv_details = await tv.res;
		const trailer_res = await fetch('../api/getTrailer', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: params.id
			})
		});
		const trailer = await trailer_res.json();
		const trailer_details = trailer.res.results;
		const cast_res = await fetch('../../api/getCast', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: params.id
			})
		});
		const cast = await cast_res.json();
		const cast_details = await cast.res.cast;
		return {
			props: {
				tv_details,
				trailer_details,
				cast_details
			}
		};
	}
</script>

<script lang="ts">
	import TvMedia from '$lib/pages/TvMedia.svelte';
	import { page } from '$app/stores';
	export let tv_details: TvType;
	export let trailer_details: TrailerType[];
	export let cast_details: CastType[];

	let tv_id: string = $page.params.id;
</script>

<TvMedia {tv_details} {trailer_details} {cast_details} {tv_id} />
