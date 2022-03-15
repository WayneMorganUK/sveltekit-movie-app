<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/utilities/ToggleDarkMode.svelte';

	let searchTerm: string;
	let media = 'movie';
	const media_items = [
		{ id: 'movie', name: 'Movies' },
		{ id: 'tv', name: 'TV' },
		{ id: 'person', name: 'Person' }
	];
	const handleOnSubmit = () => {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${media}/${searching}`);
		}
	};
</script>

<section id="search" class="flex flex-row">
	<ToggleDarkMode />
	<form
		class="text-skin-base flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleOnSubmit}
	>
		<select
			class="focus:bg-skin-tertiary focus:text-skin-selcted w-20 h-8 px-2 text-sm bg-transparent border-2 border-r-0 rounded-l-full outline-none border-skin-border"
			bind:value={media}
		>
			{#each media_items as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		</select>

		<input
			label="search"
			class="w-24 h-8 px-2 text-lg bg-transparent border-2 border-l-0 rounded-r-full outline-none lg:w-48 placeholder-text-skin-base::placeholder border-skin-border"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
