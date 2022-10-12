<script>
	import Gallery from '$lib/components/Gallery.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="py-1">
	{#if data.posts}
		<Gallery title="Projects" summary="Things I'm proud of making" contents={data.posts} path="/projects" />
	{/if}
</div>
