import {init_tome, type TomeWithComponent} from '@fuz.dev/fuz_library/tome.js';

import Contextmenu from '$lib/Contextmenu.svelte';

export const tomes: TomeWithComponent[] = [
	{
		name: 'Contextmenu',
		slug: 'Contextmenu',
		pathname: '',
		category: 'components',
		component: Contextmenu,
		related: [],
	},
];

for (const t of tomes) init_tome(t);
