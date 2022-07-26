<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data: PersonResult[];
	let PersonData = data as PersonResult[];
</script>

<section
	id="person-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#if data}
		{#each PersonData as datum}
			<PersonCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
