<script context="module" lang="ts">
</script>

<script lang="ts">
	export let total_pages: number;
	export let data = {};
	export let media_type;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {data} {total_pages} {media_type} />
