import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'sveltekit-autoimport';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		autoImport({
			components: ['./src/lib/components/'],
			include: ['**/*.svelte'],
		  }),
		sveltekit(),
	]
};

export default config;
