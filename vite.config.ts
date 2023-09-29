import type {UserConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';

const config: UserConfig = {
	ssr: {noExternal: ['@fuz.dev/fuz']},
	plugins: [
		sveltekit(),
		// Ignore the default prismjs theme:
		// TODO try to avoid flashing the original Prism theme during dev
		{
			name: 'remove_prism_css',
			enforce: 'pre',
			load: (id) => {
				if (id.endsWith('node_modules/prismjs/themes/prism.min.css')) {
					return '';
				}
				return undefined;
			},
		},
	],
};

export default config;
