<script lang="ts">
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

<!-- Movie Icon -->
<div class="pl-4 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<svg
				class=" w-6 h-6 fill-inverted group-hover:fill-selected"
				aria-hidden="true"
				role="img"
				style="vertical-align: -0.125em;"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
			>
				<path
					d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"
				/>
			</svg>
			<span class="hidden mx-2 xl:block">Movies</span>
		</button>
	</div>
</div>

<!-- TV Icon -->
<div class="pl-4 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span>
				<svg
					class=" w-6 h-6 fill-inverted group-hover:fill-selected"
					aria-hidden="true"
					role="img"
					style="vertical-align: -0.125em;"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						d="M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
					/>
				</svg>
			</span>
			<span class="hidden mx-2 xl:block">Tv</span>
		</button>
	</div>
</div>

<!-- Person icon  -->
<div class="pl-4 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span
				><svg
					class=" w-6 h-6 stroke-inverted group-hover:stroke-selected"
					aria-hidden="true"
					role="img"
					style="vertical-align: -0.125em;"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<g fill="none" stroke-width="2">
						<circle cx="12" cy="7" r="5" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
						/>
					</g>
				</svg></span
			>
			<span class="hidden mx-2 xl:block">People</span>
		</button>
	</div>
</div>

<!-- Genre Icon + dropdown -->
<div class="pl-4 xl:pl-8 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Genres"
			class="inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"
		>
			<span>
				<svg
					class=" align-middle w-6 h-6 fill-inverted group-hover:fill-selected"
					aria-hidden="true"
					role="img"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 14 14"
				>
					<path
						d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
					/>
				</svg>
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
