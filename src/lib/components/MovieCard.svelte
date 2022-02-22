<script lang="ts">
	import { media_type } from '$lib/stores/store';
	import ProgressBar from '$lib/utilities/ProgressBar.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	export let datum: MovieType;
</script>

<section id="flip-card" class="group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg">
	<div
		id="flip-card-inner"
		class="relative w-full transition-transform-6 preserve-3d group-hover:rotate-y-180"
	>
		<div
			id="flip-card-front"
			class="top-0 right-0 backface-hidden text-skin-base bg-skin-bg xl:rounded-lg"
		>
			<img
				class="oject-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg  text-skin-muted "
				src={datum.poster_path ? IMAGE_API + datum.poster_path : '/default.jpg'}
				alt={datum.title}
			/>
			<div class="p-2 xl:ml-4">
				<h6
					class="w-40 overflow-hidden text-sm xl:text-lg text-skin-base xl:w-52 whitespace-nowrap overflow-ellipsis"
				>
					{datum.title}
				</h6>
				<h6 class="font-bold xl:text-lg">
					{datum.release_date ? datum.release_date.substring(0, 4) : '-'}
				</h6>
			</div>
			<div class="absolute origin-top-left transform scale-44 left-1 top-56 xl:top-80">
				<ProgressBar progress={datum.vote_average} />
			</div>
		</div>
		<a
			class="absolute top-0 bottom-0 right-0 z-10 w-full h-full p-2 overflow-auto text-sm duration-300 ease-in-out rounded-lg backface-hidden text-skin-base bg-skin-bg text-decoration-none rotate-y-180 movie-back"
			href={`/${$media_type}/${datum.id}`}
		>
			<h6 class="mt-1 uppercase rounded xl:text-xl text-skin-base bg-secondary">Overview</h6>
			<p class="mt-1 md:text-base">{datum.overview}</p>
		</a>
	</div>
</section>
