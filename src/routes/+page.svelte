<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import SocialButton from '$lib/components/SocialButton.svelte';

	export let data;
</script>

<div
	id="gradient"
	class="h-screen bg-fixed overflow-y-auto overflow-x-clip m-0 p-0 bg-gradient-to-b from-slate-200 via-slate-100  to-purple-200"
>
	<div
		id="landing"
		class="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-2 w-screen min-h-screen md:h-screen overscroll-contain"
	>
		<div class="md:row-start-2 md:row-span-2 flex-col items-center">
			<div class="m-auto p-8 w-full flex-col items-center">
				<div class="mx-auto max-w-fit md:ml-0">
					<h2 class="text-gray-900 text-2xl sm:text-3xl">Hi, I'm</h2>
					<h1 class="text-violet-600 font-bold text-4xl sm:text-6xl">Drew Fisher</h1>
				</div>
				<div class="my-4 mx-auto md:ml-0 md:mr-auto w-full shadow-lg rounded-md bg-slate-100 flex items-center p-2 space-x-4 max-w-min">
					<SocialButton alt="Github" link="https://github.com/drewsapple" iconPath="/icons/GitHub-Mark-120px-plus.png" tip="@Drewsapple" />
					<SocialButton alt="Twitter" link="https://twitter.com/0xDrewF" iconPath="/icons/Twitter social icons - circle - blue.png" tip="@0xDrewF" />
					<SocialButton alt="Lenster" link="https://lenster.xyz/u/DrewF.lens" iconPath="/icons/LENS LOGO__Lens_ icon.png" tip="@DrewF.lens" />
				</div>
			</div>
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
