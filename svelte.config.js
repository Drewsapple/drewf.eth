import adapter from '@sveltejs/adapter-static';
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


	//
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"/",
				"/courses",
				"/courses/softwareEngineering",
				"/writings",
				"/writings/article_1",
			]
		}
	}
};

export default config;
