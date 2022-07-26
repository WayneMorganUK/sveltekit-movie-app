<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error, status }) => {
		if (error && error.message) {
			return {
				props: {
					message: `${status}: ${error.message}`
				}
			};
		} else {
			return {
				props: {
					message: `${status}: ${error}`
				}
			};
		}
	};
</script>

<script lang="ts">
	export let message: string;
</script>

<div class=" text-center mb-16 ">
	<h2>Oops</h2>
	<p>{message}</p>
	<a href="/">Return to the home screen</a>
</div>
