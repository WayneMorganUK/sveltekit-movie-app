<script lang="ts">
	// import { trailer_key, video_site } from '$lib/stores/store';
	export let trailer_key: string;
	export let video_site: string;
	let shown = false;
	export function show(): void {
		shown = true;
	}
	export function hide(): void {
		shown = false;
	}
</script>

{#if shown}
	<section id="trailer" class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-60">
		<div class="absolute top-0 left-0 w-full h-full bg-contain">
			{#if video_site === 'YouTube'}
				<iframe
					class="absolute top-0 left-0 w-full h-full bg-contain iframe"
					title="Trailer"
					src="https://www.youtube.com/embed/{trailer_key}?rel=0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					width="1080"
					allowfullscreen
				>
					<track default kind="captions" />
				</iframe>
			{:else if video_site === 'Vimeo'}
				<iframe
					class="absolute top-0 left-0 w-full h-full bg-contain iframe"
					title="trailer"
					src="https://player.vimeo.com/video/{trailer_key}"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
				/>
			{/if}
		</div>

		<div>
			<button class="absolute left-1/2 right-1/2 top-3 " aria-label="close" on:click={() => hide()}>
				<svg
					class="w-12 h-12 fill-red-700"
					aria-hidden="true"
					role="img"
					style="vertical-align: -0.125em;"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 1024 1024"
				>
					<path
						d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
					/><path
						d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
					/>
				</svg>
			</button>
		</div>
	</section>
{/if}
