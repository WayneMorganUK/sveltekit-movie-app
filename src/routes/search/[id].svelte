<script context="module" lang="ts">
	import { media_type, data, current_page } from '$lib/stores/store';
	import { get } from 'svelte/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, params }) {
		current_page.set(1);
		const res = await (
			await fetch('../api/postSearch', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: get(media_type),
					query: params.id,
					page: '1'
				})
			})
		).json();
		data.set(await res.res.results);
		const total_pages = await res.res.total_pages;
		return {
			props: {
				total_pages
			}
		};
	}
</script>

<script lang="ts">
	export let total_pages: number;
	let searching = $page.params.id;

	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
</script>

{#key $data}
	<MainSection {total_pages} {searching} />
{/key}
