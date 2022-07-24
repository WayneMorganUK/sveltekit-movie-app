<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/components/Header/ToggleDarkMode.svelte';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';

	const mediaOptions = [
		{ id: 'movie', name: 'Movies', component: MovieSvg },
		{ id: 'tv', name: 'Tv', component: ShowSvg },
		{ id: 'person', name: 'People', component: PersonSvg }
	];

	let selectedMedia = mediaOptions[0];

	let searchTerm: string;

	function handleSearch() {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${selectedMedia.id}/${searching}`);
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
			class="group cursor-pointer w-8 h-8 pt-1 pl-3 text-sm border-2 border-r-0 rounded-l-full outline-none border-skin-border"
		>
			<svelte:component this={selectedMedia.component} />
			<div
				class="hidden group-hover:flex flex-col gap-2 w-28 p-2 pl-[18px] -ml-2 border-skin-border bg-skin-primary text-skin-base"
			>
				{#each mediaOptions as option}
					<div
						on:click={() => (selectedMedia = option)}
						class="relative flex flex-row gap-3 -left-2 hover:text-skin-selected "
						value={option}
					>
						<svelte:component this={option.component} />
						{option.name}
					</div>
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
