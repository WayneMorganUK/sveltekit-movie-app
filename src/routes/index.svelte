<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	import { data, current_page } from '$lib/stores/store';
	export async function load({ fetch }) {
		data.set(undefined);
		current_page.set(1);
		const res = await fetch('/api/postShow', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				page: '1'
			})
		});
		const json_res = await res.json();
		data.set(json_res.res.results);
		const total_pages = await json_res.res.total_pages;
		if (res.ok) {
			return {
				props: {
					total_pages
				}
			};
		}
		return {
			status: res.status,
			error: new Error('what we have here is a failure to communicate')
		};
	}
</script>

<script lang="ts">
	export let total_pages: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

{#key $data}
	<MainSection {total_pages} />
{/key}
