<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/utilities/ToggleDarkMode.svelte';

	const mediaSelectItems = [
		{ id: 'movie', name: '&#xf008' },
		{ id: 'tv', name: '&#xf26c' },
		{ id: 'person', name: '&#xf406' }
	];

	let media = mediaSelectItems[0];
	let searchTerm: string;

	function handleSearch() {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${media.id}/${searching}`);
		}
	}
</script>

<section id="search" class="flex flex-row">
	<ToggleDarkMode />
	<form
		class="text-skin-base flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleSearch}
	>
		<div
			class=" group cursor-pointer w-8 h-8 pt-1 pl-3 text-sm bg-transparent border-2 border-r-0 rounded-l-full outline-none fa-solid border-skin-border"
		>
			{@html media.name}

			<div
				class="hidden group-hover:block w-8 relative ml-2 items-center px-4 border-2 -left-4 border-skin-border bg-skin-primary text-skin-base"
			>
				{#each mediaSelectItems as item}
					<li
						class="relative flex flex-row py-2 -left-2 fa hover:text-skin-selected"
						on:click={() => (media = item)}
					>
						{@html item.name}
					</li>
				{/each}
			</div>
		</div>
		<input
			label="search"
			class="w-24 h-8 px-2 text-lg bg-transparent border-2 border-l-0 rounded-r-full outline-none lg:w-48 placeholder-text-skin-base::placeholder border-skin-border"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
