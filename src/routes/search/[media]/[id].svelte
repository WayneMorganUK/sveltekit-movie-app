<script lang="ts">
	export let total_pages: number;
	export let data;

	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	$: media_type = $page.params.media;

	let searching = $page.params.id;
</script>

{#key data}
	<MainSection {data} {total_pages} {searching} {media_type} />
{/key}
