<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let isLoadMore = false;
	let component: HTMLDivElement;
	let element: Document;

	onMount(() => {
		element = document;
	});

	$: if (element) {
		element.addEventListener('scroll', onScroll);
	}

	const onScroll = (event: Event) => {
		const offset = calcOffset(event);
		if (offset <= 450) {
			if (!isLoadMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};

	const calcOffset = (event: Event) => {
		const target = event.target as Document;
		const element = target.documentElement;
		return element.scrollHeight - element.clientHeight - element.scrollTop;
	};

	onDestroy(() => {
		if (element) {
			element.removeEventListener('scroll', onScroll);
		}
	});
</script>

<div bind:this={component} id="svelte-infinite-scroll" class="w-0" />
