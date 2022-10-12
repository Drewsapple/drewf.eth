import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svx'],
			layout: {
				_: 'src/lib/mdsvex-layout.svelte'
			}
		})
	],


	// Include paths unreachable from index to allow prerender
	kit: {
		adapter: !!process.env.STATIC_SITE ? adapterStatic() : adapter(),
		prerender: {
			entries: [
				"/",
				"/courses/",
				"/courses/softwareEngineering/",
				"/projects/",
				"/writings/",
				"/writings/article_1/",
				"/api/posts",
				"/api/projects",
				"/api/courses",
				"/api/writings",
			]
		},
		trailingSlash: 'always'
	}
};

export default config;
