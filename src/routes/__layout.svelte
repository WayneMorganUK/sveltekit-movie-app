<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	import { tv_genres, movie_genres } from '$lib/stores/store';
	export async function load({ fetch }) {
		try {
			const resTv = await (await fetch('/api/getTvGenres')).json();
			tv_genres.set(resTv.tv_genres);
			const resMovie = await (await fetch('/api/getMovieGenres')).json();
			movie_genres.set(resMovie.movie_genres);
			return {};
		} catch (e) {
			console.log('error', e);
		}
	}
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-WJN2MLS');
	</script>
	<!-- End Google Tag Manager -->
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" /> -->
	<!-- <link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"
	/> -->
	<!-- <link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/> -->
	<title>TMDB on Sveltekit</title>
	<meta name="description" content="TMDB movie & tv database" />
	<meta name="keywords" content="HTML, CSS, JavaScript, svelte" />
	<meta name="author" content="Wayne Morgan" />
</svelte:head>

<main class={$theme}>
	<div class="fixed top-0 w-full min-h-screen -z-50 bg-gradient-to-r from-skin-bg to-skin-border" />

	<Header />
	<section class="mx-auto mt-12 md:mt-[60px] max-w-7xl">
		<slot />
	</section>
</main>
