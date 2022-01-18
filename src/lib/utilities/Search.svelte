<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/utilities/ToggleDarkMode.svelte';

	let searchTerm: string;
	const handleOnSubmit = () => {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${searching}`);
		}
	};
</script>

<section id="search" class="flex flex-row">
	<ToggleDarkMode />
	<form
		class=" text-skin-base flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleOnSubmit}
	>
		<input
			label="search"
			class="w-24 h-8 px-2 text-lg bg-transparent border-2 rounded-full lg:w-48 placeholder-text-skin-base::placeholder border-skin-border"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
