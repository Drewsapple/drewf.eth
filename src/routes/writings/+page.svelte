<script>
	import Gallery from '$lib/components/Gallery.svelte';

	export let data;
</script>

<div class="py-1">
	{#if data.posts}
		<Gallery title="Writings" summary="My thoughts and articles" contents={data.posts} />
	{/if}
</div>
