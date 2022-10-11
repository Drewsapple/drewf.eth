<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	export let data;
</script>

<div
	id="gradient"
	class="h-screen bg-fixed overflow-scroll m-0 bg-gradient-to-b from-slate-200 via-slate-100  to-purple-200"
>
	<div
		id="landing"
		class="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-2 w-screen min-h-screen md:h-screen overscroll-contain"
	>
		<div class="md:row-start-2 md:row-span-2 flex items-center">
			<span id="introduction" class="m-auto p-8">
				<h2 class="text-gray-900 text-3xl">Hi, I'm</h2>
				<h1 class="text-violet-600 font-bold text-6xl">Drew Fisher</h1>
			</span>
		</div>

		<div id="projects" class="col-auto row-span-3 md:col-start-2 md:col-span-2 flex-col">
			{#if data.projects}
				<Gallery
					title="Projects"
					summary="Things I'm proud of making"
					contents={data.projects}
					path="/projects"
				/>
			{/if}
			{#if data.writings}
				<Gallery
					title="Writings"
					summary="My thoughts and articles"
					contents={data.writings}
					path="/writings"
				/>
			{/if}
			{#if data.courses}
				<Gallery
					title="Courses"
					summary="Things I've learned"
					contents={data.courses}
					path="/courses"
				/>
			{/if}
		</div>
	</div>
</div>
