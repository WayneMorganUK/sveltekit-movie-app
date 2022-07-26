<script context="module" lang="ts">
	/** * @type {import('@sveltejs/kit').Load} */
	import { tv_genres, movie_genres } from '$lib/stores/store';
	export async function load({ fetch, session }: { fetch: any; session: any }) {
		try {
			const resTv = await (await fetch('/api/getTvGenres')).json();
			tv_genres.set(resTv.tv_genres);
			const resMovie = await (await fetch('/api/getMovieGenres')).json();
			movie_genres.set(resMovie.movie_genres);
			const localTheme: string = session.theme;
			return { props: { localTheme } };
		} catch (e) {
			console.log('error', e);
		}
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/store';
	export let localTheme: string;

	onMount(() => {
		// We load the in the <script> tag in load, but then also here onMount to setup stores
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localTheme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
			} else {
				localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
			}
		} else {
			theme.useLocalStorage();
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				document.cookie =
					'theme=dark;path=/;Samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			} else {
				document.documentElement.classList.remove('dark');
				document.cookie =
					'theme=light;path=/;Samesite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			}
		} else {
			let data = localStorage.getItem('theme');
			if (data) {
				data = JSON.parse(data);
				document.documentElement.classList.add(data.mode);
			}
		}
	</script>
	<title>TMDB on Sveltekit</title>
</svelte:head>

<main id="core" class={localTheme}>
	<div class="fixed top-0 w-full min-h-screen -z-50 bg-skin-bg" />

	<Header />
	<Footer />
	<section class="mx-auto mt-12 md:mt-[60px] max-w-7xl">
		<slot />
	</section>
</main>
