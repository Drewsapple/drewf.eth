<script>
	import Gallery from '$lib/components/Gallery.svelte';

	export let data;
</script>

<div class="py-1">
{#if data.posts}
<Gallery contents={data.posts} />
{/if}
</div>