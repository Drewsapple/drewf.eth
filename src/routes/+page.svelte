<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
</script>

<div id="landing" class="grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-24 w-screen md:h-screen">
	<div class="md:row-span-3 md:row-start-2 flex items-center">
		<span id="introduction" class="m-auto p-8">
			<h2 class="text-gray-900 text-4xl">Hi, I'm</h2>
			<h1 class="text-violet-600 font-bold text-8xl">Drew Fisher</h1>
		</span>
	</div>

	<div id="projects" class="col-auto row-auto md:row-span-2 md:col-span-2 p-4">
		<Gallery title="Projects" summary="Things I'm proud of making">
			<!-- <div class="flex flex-row items-center h-full">
				{#each ['1', '2'] as card}
					<div class="h-full w-full">
						<img src="https://via.placeholder.com/200" class="h-1/2" alt="" />
						<h3 class="text-gray-900 text-2xl">Project Name</h3>
						<p class="text-gray-600">blah</p>
					</div>
				{/each}
			</div> -->
		</Gallery>
	</div>

	<div id="courses" class="row-auto col-auto md:row-span-2 md:col-span-2 p-4">
		<Gallery title="Courses" summary="Things I've learned" />
	</div>
</div>

<style>
	:global(body) {
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0vh,
			rgba(255, 255, 255, 1) 65vh,
			rgba(216, 206, 226, 1) 80vh,
			rgba(233, 223, 243, 1) 100vh
		);
		margin: 0;
		background-attachment: fixed;
	}
</style>
