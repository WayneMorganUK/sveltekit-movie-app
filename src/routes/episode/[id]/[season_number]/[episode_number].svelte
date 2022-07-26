<script lang="ts">
	import Episode from '$lib/pages/Episode.svelte';
	export let episode_details: EpisodesType;
</script>

<Episode {episode_details} />
