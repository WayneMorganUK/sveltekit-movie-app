<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/stores/theme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<div
	class="flex justify-center w-8 h-8 mr-2 align-middle border-2 rounded-full border-skin-border focus:outline-none"
>
	<button
		class=""
		aria-label="Toggle Light and Dark mode"
		on:click|preventDefault={() => {
			toggleTheme(theme, $theme);
		}}
	>
		<div class="hidden dark:block">
			<Sun />
		</div>
		<div class="dark:hidden">
			<Moon />
		</div>
	</button>
</div>
