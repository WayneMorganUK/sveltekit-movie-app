<script lang="ts">
	export let total_pages: number;
	export let data: MovieResult[] | ShowResult[] | PersonResult[];
	export let media_type: MediaType;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	let searching = $page.params.id;
</script>

{#key data}
	<MainSection {data} {total_pages} {searching} {media_type} />
{/key}
