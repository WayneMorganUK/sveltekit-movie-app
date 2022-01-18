<script lang="ts">
	import { media_type, selected } from '$lib/stores/store';
	import { goto } from '$app/navigation';
	import Genre from '$lib/components/Genre.svelte';

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

<div class="pl-6 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class:text-skin-selected={$media_type === 'movie'}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span><i class="fa fa-video-camera" aria-hidden="true" /></span>
			<span class="hidden mx-2 xl:block">Movies</span>
		</button>
	</div>
</div>

<div class="pl-6 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class:text-skin-selected={$media_type === 'tv'}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span><i class="fa fa-television" aria-hidden="true" /></span>
			<span class="hidden mx-2 xl:block">Tv</span>
		</button>
	</div>
</div>

<div class="pl-6 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class:text-skin-selected={$media_type === 'person'}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span><i class="fa fa-user" aria-hidden="true" /></span>
			<span class="hidden mx-2 xl:block">People</span>
		</button>
	</div>
</div>
{#key $selected}
	<div class="pl-6 xl:pl-8 ">
		<div class="relative z-50 inline-block group">
			<button
				aria-label="Genres"
				class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
			>
				<span><i class="fa fa-tag" aria-hidden="true" /></span>
				<span class="hidden mx-2 xl:block">Genres</span>
			</button>
			<ul
				class="fixed left-0 hidden rounded xl:absolute bg-skin-primary text-skin-base group-hover:block"
			>
				<Genre />
			</ul>
		</div>
	</div>
{/key}
