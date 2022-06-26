<script lang="ts">
	export let total_pages: number;
	export let data = {};
	export let media_type;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	let searching = $page.params.id;
</script>

<MainSection {data} {total_pages} {searching} {media_type} />
