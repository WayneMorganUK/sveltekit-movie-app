<script lang="ts">
	export let total_pages: number;
	export let data = {};
	export let media_type;
	export let genres: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

{#key data}
	<MainSection {data} {total_pages} {genres} {media_type} />
{/key}
