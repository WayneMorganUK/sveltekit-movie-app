<script lang="ts">
	import TmdbSvg from '$lib/svgs/TmdbSvg.svelte';
</script>

<footer class="fixed bottom-0 z-50 w-full bg-skin-primary">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between ">
		<div
			class="flex flex-row md:flex-shrink items-center justify-between h-6 pl-2 pr-1 mx-auto max-w-7xl md:pl-5 lg:pl-7 "
		>
			<div class=" text-xs text-skin-inverted flex flex-row items-center">
				Built by <a
					class=" text-xs pl-1 text-cyan-300 hover:text-skin-selected"
					href="https:\\athena-designs.com"
					target="_blank"
					rel="external">Athena-Designs</a
				>
			</div>
		</div>

		<div
			class=" text-xs text-skin-inverted md:flex-grow flex flex-wrap justify-center md:justify-end md:pr-2 items-center"
		>
			<p>This product uses the</p>
			<div class="h-[6px] md:h-[10px] px-2">
				<TmdbSvg />
			</div>

			<p>API but is not endorsed or certified by TMDB</p>
		</div>
	</div>
</footer>
