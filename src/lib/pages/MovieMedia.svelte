<script lang="ts">
	import ProgressBar from '$lib/svgs/ProgressBar.svelte';
	import Modal from '$lib/utilities/Modal.svelte';
	import Cast from '$lib/components/Cast.svelte';
	import { browser } from '$app/env';

	export let movie_details: MovieType;
	export let trailer_details: TrailerType[];
	export let cast_details: CastType[];
	let percent = Math.floor(movie_details.vote_average * 10);

	let trailer_key: string;
	let video_site: string;

	const IMAGE_API = 'https://image.tmdb.org/t/p/';

	let modal: { show: () => any };
	function showModal(trailer: string, site: string): void {
		trailer_key = trailer;
		video_site = site;
		modal.show();
	}
	if (browser) {
		window.scrollTo({ top: -1000, behavior: 'smooth' });
	}
</script>

<section
	id="media"
	class="bg-right-top bg-no-repeat bg-contain text-skin-inverted xl:mt-5 md:bg-cover md:rounded-2xl"
	style="background-image: url({IMAGE_API}original/{movie_details.backdrop_path})"
>
	<div
		class="bg-gradient-to-r md:rounded-2xl"
		style="background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"
	>
		<div
			class="grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"
		>
			<div class="col-start-1 col-end-2 ">
				<img
					class="w-64 mx-auto overflow-hidden h-96 md:h-120 md:w-80 rounded-2xl"
					src={movie_details.poster_path
						? IMAGE_API + 'w500' + movie_details.poster_path
						: '/default.jpg'}
					alt="movie poster"
				/>
			</div>
			<div class="flex flex-wrap content-start md:col-start-2 md:col-end-5 md:pl-10">
				<div class="flex flex-wrap w-full mt-6 md:mt-0">
					<h4 class="w-full md:flex md:text-4xl">
						{movie_details.title}
						<span class="ml-1 text-lg md:text-4xl text-skin-inverted">
							{movie_details.release_date ? movie_details.release_date.substring(0, 4) : ''}
						</span>
					</h4>
					<div class="md:flex">
						<div class="pl-0">
							{movie_details.release_date ? movie_details.release_date : 'No Date Available'}
							<span class="hidden md:px-2 md:inline">&#x2022;</span>
						</div>
						<div>
							{#each movie_details.genres as { id, name }, i}
								<a class="hover:text-skin-selected" href="/genre/movie/{id}">{name}</a>
								{#if i !== movie_details.genres.length - 1}<span class="mx-2">|</span>{/if}
							{/each}
						</div>
						{#if movie_details && movie_details.runtime}
							<div class="duration">
								<span class="hidden md:px-2 md:inline">&#x2022;</span>{(movie_details.runtime -
									(movie_details.runtime % 60)) /
									60}h {movie_details.runtime % 60}m
							</div>
						{/if}
					</div>
				</div>
				<div
					class="relative flex flex-wrap justify-center w-full mb-1 md:justify-start md:flex-nowrap md:overflow-y-hidden"
				>
					{#if trailer_details.length > 0}
						{#each trailer_details as trailer}
							<div
								class="flex-shrink-0 w-56 pl-2 cursor-pointer hover:opacity-80"
								on:click={() => showModal(trailer.key, trailer.site)}
								title={trailer.name}
							>
								<img src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`} alt={trailer.name} />
							</div>
						{/each}
						<!-- <p class="flex items-center justify-center ml-4 text-2xl">Play Trailer</p> -->
					{:else}
						<div class="flex pl-5">
							<p class="flex justify-center ml-4">No Trailer Available</p>
						</div>
					{/if}
				</div>
				<div class="w-full">
					<div class="text-lg italic opacity-70">{movie_details.tagline}</div>
					<div class="flex justify-between items-center">
						<h4 class="w-full font-semibold">Overview</h4>
						{#if movie_details.vote_average}
							<div class="h-12 w-12 p-0 rounded-full bg-black">
								<ProgressBar {percent} />
								<div
									class="relative top-0 left-0 -translate-y-12 w-12 h-12 flex justify-center items-center"
								>
									<p class="text-gray-200 text-base">
										{percent}<span class="text-[0.5rem] leading-4 align-top">%</span>
									</p>
								</div>
							</div>
						{/if}
					</div>
					<div class="overview-details">{movie_details.overview}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Cast {cast_details} />

<Modal bind:this={modal} {trailer_key} {video_site} />
