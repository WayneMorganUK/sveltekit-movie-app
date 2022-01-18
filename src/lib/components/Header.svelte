<script lang="ts">
	import Search from '$lib/utilities/Search.svelte';
	import Selector from '$lib/utilities/Selector.svelte';
	import { goto } from '$app/navigation';

	import { media_type } from '$lib/stores/store';

	function toggleHome() {
		$media_type = 'movie';
		goto('/');
	}
</script>

<header class="fixed top-0 z-50 w-full h-12 bg-skin-primary">
	<div class="flex items-center justify-between h-12 pl-2 pr-1 mx-auto max-w-7xl md:pl-5 lg:pl-7 ">
		<div class="flex flex-row items-center">
			<button
				on:click|preventDefault={toggleHome}
				aria-label="home"
				class="text-3xl text-skin-inverted hover:text-skin-selected"
				href="/"
				><i class="fa fa-home" />
			</button>
			<Selector />
		</div>

		<Search />
	</div>
</header>
