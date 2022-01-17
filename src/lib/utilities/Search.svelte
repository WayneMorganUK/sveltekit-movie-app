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
		class="flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleOnSubmit}
	>
		<input
			label="search"
			class=" bg-transparent w-24 lg:w-48 h-8 rounded-full text-lg px-2 placeholder-text-skin-base::placeholder border-2 border-skin-border"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
