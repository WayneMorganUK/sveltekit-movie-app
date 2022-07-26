<script lang="ts">
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
	export let datum: PersonResult;
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';
</script>

<section id="person-card" class="w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-bg xl:rounded-lg">
	<a href={`/person/${datum.id}`} class="top-0 right-0 text-skin-base xl:rounded-lg">
		{#if datum.profile_path === null}
			<div class="w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg flex">
				<DummyPerson />
			</div>
		{:else}
			<img
				class="oject-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg"
				src={IMAGE_API + datum.profile_path}
				alt={datum.name}
			/>
		{/if}
		<div class="p-2 h-18 w-44 xl:w-60 bg-skin-bg flex content-center">
			<h6
				class="w-40 overflow-hidden text-sm xl:text-lg flex items-center justify-center text-textDark xl:w-52 whitespace-nowrap overflow-ellipsis"
			>
				{datum.name}
			</h6>
		</div>
	</a>
</section>
