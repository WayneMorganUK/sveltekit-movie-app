<script>
	// import { theme } from '$lib/stores/theme-store';
	import { setTheme, Theme, theme } from '$lib/stores/theme';
	const toggleTheme = () => {
		const nextTheme = $theme === Theme.Dark ? Theme.Light : Theme.Dark;
		setTheme(nextTheme);
	};
</script>

<button
	id="night-mode"
	aria-label="night-mode-switch"
	class="text-skin-inverted"
	on:click={toggleTheme}
>
	<div
		class="flex justify-center w-8 h-8 mr-2 align-middle border-2 rounded-full border-skin-border focus:outline-none"
	>
		{#if $theme === Theme.Dark}
			<span
				><svg
					class=" inline justify-center align-middle w-5 h-5"
					aria-hidden="true"
					role="img"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<g fill="none" stroke="#ff0" stroke-linecap="round" stroke-width="2">
						<path
							d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"
						/>
						<circle cx="12" cy="12" r="4" />
					</g>
				</svg></span
			>
		{:else}
			<span
				><svg
					class=" inline justify-center align-middle w-5 h-5"
					aria-hidden="true"
					viewBox="0 0 24 24"
					preserveAspectRatio="xMidYMid meet"
				>
					<g fill="silver">
						<path
							d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"
						/>
						<path
							d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"
						/>
					</g>
				</svg></span
			>
		{/if}
	</div>
</button>
