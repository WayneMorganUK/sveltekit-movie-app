<script lang="ts">
	import Search from '$lib/components/Header/Search.svelte';
	import Selector from '$lib/components/Header/Selector.svelte';
	import { goto } from '$app/navigation';
	import Home from '$lib/svgs/HomeSvg.svelte';

	function toggleHome() {
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
			>
				<Home />
			</button>
			<Selector />
		</div>

		<Search />
	</div>
</header>
