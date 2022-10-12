<script>
	import Gallery from '$lib/components/Gallery.svelte';

	export let data;
</script>

<svelte:head>
	<title>Courses</title>
</svelte:head>

<div class="py-1">
	{#if data.posts}
		<Gallery title="Courses" summary="Things I've learned" contents={data.posts} path="/courses" />
	{/if}
</div>
