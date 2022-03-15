<script lang="ts">
	export let data;
	export let total_pages: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {data} {total_pages} media_type={'movie'} />
