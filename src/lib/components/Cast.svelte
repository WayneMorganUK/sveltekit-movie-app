<script lang="ts">
	export let cast_details: CastType[] = [];
	const IMAGE_API = 'https://image.tmdb.org/t/p/w200/';
</script>

{#if cast_details.length}
	<section
		id="people"
		class="pt-1 mx-auto max-w-7xl xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 xl:rounded-2xl"
	>
		<h3
			class="flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"
		>
			Top Billed Cast
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
		>
			{#each cast_details as person}
				<div
					class="w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected"
				>
					<a href={`/person/${person.id}`}>
						<div class="bg-blue-900 w-28 h-42">
							{#if person.profile_path}
								<img
									class="rounded-t w-28 h-42"
									src={IMAGE_API + person.profile_path}
									alt="profile"
								/>
							{:else}
								<img
									class="bottom-0 flex items-end justify-end pt-8 rounded-t w-28 h-42"
									src="/person.svg"
									alt="profile"
								/>
							{/if}
						</div>
						<p
							class="flex items-center justify-center font-semibold text-center text-skin-base line-clamp-1 xl:line-clamp-2"
						>
							{person.character}
						</p>
						<p
							class="flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"
						>
							{person.name}
						</p>
					</a>
				</div>
			{/each}
		</div>
	</section>
{/if}
