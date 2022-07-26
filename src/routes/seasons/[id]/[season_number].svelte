<script lang="ts">
	import Season from '$lib/pages/Season.svelte';
	import { page } from '$app/stores';
	export let season_details: SeasonType;
	let tv_id = $page.params.id;
</script>

<Season {season_details} {tv_id} />
