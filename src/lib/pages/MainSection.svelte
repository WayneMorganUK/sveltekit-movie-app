<script lang="ts">
	import MovieList from '$lib/pages/MovieList.svelte';
	import TvList from '$lib/pages/TvList.svelte';
	import PersonList from '$lib/pages/PersonList.svelte';
	import InfiniteScroll from '$lib/utilities/InfiniteScroll.svelte';
	// import { current_page } from '$lib/stores/store';
	// import { get } from 'svelte/store';
	export let data;
	export let total_pages = 1;
	export let genres: number = undefined;
	export let searching: string = undefined;
	export let media_type: MediaType;
	let current_page = 1;

	async function moreData() {
		let res: Response;
		if (searching) {
			res = await fetch('../../api/postSearch', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: media_type,
					query: searching,
					page: current_page
				})
			});
		} else if (genres === undefined) {
			res = await fetch('../api/postShow', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: media_type,
					page: current_page
				})
			});
		} else {
			res = await fetch('../../api/postShowGenre', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: media_type,
					page: current_page,
					genre: genres
				})
			});
		}

		const datas = await res.json();
		const res_results = datas.res.results;
		data = [...data, ...res_results];
	}

	function loadMorePages() {
		current_page++;
		moreData();
	}
</script>

<section id="main" class="h-full">
	<!-- <PageTitle /> -->
	{#key data.length}
		{#if media_type === 'person'}
			<PersonList {data} />
		{:else if media_type === 'movie'}
			<MovieList {data} />
		{:else if media_type === 'tv'}
			<TvList {data} />
		{/if}
	{/key}

	{#if current_page < total_pages}
		<InfiniteScroll on:loadMore={() => loadMorePages()} />
	{/if}
</section>
