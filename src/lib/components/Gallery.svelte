<script lang="ts">
	export let title: string = '';
	export let summary: string = '';
	export let path: string = './';
	export let contents: any[] = [];
</script>

<div class="card min-h-fit m-4 flex-grow shadow-xl bg-base-100">
	<div class="card-body">
		<a href={path} class="card-title"><h2 class="text-2xl font-bold">{title}</h2></a>
		<p>{summary}</p>

		<div class="flex min-h-fit overflow-x-auto p-2">
			{#each contents as post}
				<a class="min-w-fit max-w-xs my-auto mr-4 card shadow-md bg-base-200" href={post.path}>
					<div class="card-body px-4 py-2 h-48">
						{#if post.meta}
							<figure class="h-1/2"><img src="" class="object-cover" alt="" /></figure>
							<h3 class="text-gray-900 text-xl h-1/4">{post.meta.title ? post.meta.title : ""}</h3>
							<p class="text-gray-600 h-1/4 text-sm ">{post.meta.subtitle ? post.meta.subtitle : ""}</p>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
