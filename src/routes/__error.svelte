<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script lang="ts">
	export let message: string;
</script>

<div class=" text-center mb-16 ">
	<h2>Oops</h2>
	<p>{message}</p>
	<a href="/">Return to the home screen</a>
</div>
