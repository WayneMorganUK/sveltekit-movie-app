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
			>
				<!-- <i class="fa fa-home" /> -->
				<svg
					class="w-8 h-8 fill-inverted hover:fill-selected"
					aria-hidden="true"
					role="img"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 576 512"
				>
					<path
						d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
					/></svg
				>
			</button>
			<Selector />
		</div>

		<Search />
	</div>
</header>
