<script lang="ts">
	import Gallery from '../components/Gallery.svelte';
</script>

<div id="gallery" class="md:grid grid-rows-4 grid-cols-3 gap-24">
	<div class="row-start-1 col-start-1 h-96 md:h-screen flex items-center">
		<span id="introduction" class="min-h-1/2 mx-auto p-8 max-w-min">
			<h2 class="text-gray-900 text-4xl">Hi, I'm</h2>
			<h1 class="text-violet-600 font-bold text-8xl">Drew Fisher</h1>
		</span>
	</div>

	<div id="projects" class="col-start-2 row-start-1 col-span-2 p-8">
		<Gallery name="Projects" summary="Things I'm proud of making" />
	</div>
	
	<div id="courses" class="col-start-2 row-start-2 col-span-2 p-8">
		<Gallery name="Courses" summary="Things I've learned" />
	</div>
</div>

<style>
	#gallery {
		background: rgb(255, 255, 255);
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 1) 65%,
			rgba(216, 206, 226, 1) 80%,
			rgba(233, 223, 243, 1) 100%
		);
		height: 100vh;
	}
</style>
