import type {ComponentType} from 'svelte';

import Contextmenu from '$routes/library/Contextmenu/+page.svelte';

// TODO dynamic import

export interface MenuItem {
	slug: string;
	pathname: string;
	name: string;
	category: string;
	related?: string[];
}

export type MenuItemWithComponent = MenuItem & {component: ComponentType};

export const library_items_by_name: Map<string, MenuItemWithComponent> = new Map(
	[
		{
			name: 'Contextmenu',
			slug: 'Contextmenu',
			pathname: '',
			category: 'components',
			component: Contextmenu,
			// TODO think about this, tying together many projects
			// related: ['Dialog'],
		},
	].map((item) => {
		item.pathname = `/library/${item.slug}`;
		return [item.name, item];
	}),
);

export const library_items: MenuItemWithComponent[] = Array.from(library_items_by_name.values());
