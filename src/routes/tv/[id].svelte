<script lang="ts">
	import TvMedia from '$lib/pages/TvMedia.svelte';
	export let tv_details: TvType;
	export let trailer_details: TrailerType[];
	export let cast_details: CastType[];

	import { page } from '$app/stores';
	let tv_id: string = $page.params.id;
</script>

<TvMedia {tv_details} {trailer_details} {cast_details} {tv_id} />
