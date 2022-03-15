<script lang="ts">
	import Person from '$lib/pages/Person.svelte';
	export let person: PersonType;
	export let knownFor: KnownForType[];
</script>

<Person {person} {knownFor} />
