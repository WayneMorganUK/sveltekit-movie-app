<script lang="ts">
	import { goto } from '$app/navigation';
	import Genre from '$lib/components/Header/Genre.svelte';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';
	import GenreSvg from '$lib/svgs/GenreSvg.svelte';
	function toggleMovie() {
		goto('/trending/movie');
	}

	function toggleTv() {
		goto('/trending/tv');
	}

	function togglePerson() {
		goto('/trending/person');
	}
</script>

<!-- Movie Icon -->
<div class="pl-3 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class="inline-flex items-center py-2 rounded text-skin-inverted hover:text-skin-selected"
		>
			<MovieSvg />
			<span class="hidden mx-2 xl:block">Movies</span>
		</button>
	</div>
</div>

<!-- TV Icon -->
<div class="pl-3 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class="inline-flex items-center py-2 rounded text-skin-inverted hover:text-skin-selected"
		>
			<span>
				<ShowSvg />
			</span>
			<span class="hidden mx-2 xl:block">Tv</span>
		</button>
	</div>
</div>

<!-- Person icon  -->
<div class="pl-3 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class="inline-flex items-center py-2 rounded text-skin-inverted hover:text-skin-selected"
		>
			<span class="w-5 h-5">
				<PersonSvg />
			</span>
			<span class="hidden mx-2 xl:block">People</span>
		</button>
	</div>
</div>

<!-- Genre Icon + dropdown -->
<div class="pl-3 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Genres"
			class="inline-flex items-center py-2 rounded text-skin-inverted hover:text-skin-selected"
		>
			<span>
				<GenreSvg />
			</span>
			<span class="hidden mx-2 xl:block">Genres</span>
		</button>
		<ul
			class="fixed left-0 hidden rounded xl:absolute bg-skin-primary text-skin-base group-hover:block"
		>
			<Genre />
		</ul>
	</div>
</div>
