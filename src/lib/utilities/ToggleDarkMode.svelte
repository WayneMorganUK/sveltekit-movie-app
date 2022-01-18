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
			<span>
				<i class="text-yellow-400 fa fa-sun-o" id="light-mode" aria-label="light-mode" /></span
			>
		{:else}
			<span> <i class="text-gray-300 fa fa-moon-o" id="dark-mode" aria-label="dark-mode" /></span>
		{/if}
	</div>
</button>
