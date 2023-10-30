// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_contextmenu',
	description: 'contextmenu for Svelte and Fuz',
	version: '0.5.0',
	type: 'module',
	license: 'MIT',
	homepage: 'https://contextmenu.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_contextmenu',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'@fuz.dev/fuz_library': '*', '@grogarden/util': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.77.0',
		'@fuz.dev/fuz_code': '^0.4.1',
		'@fuz.dev/fuz_dialog': '^0.4.1',
		'@fuz.dev/fuz_library': '^0.16.2',
		'@grogarden/gro': '^0.98.1',
		'@grogarden/util': '^0.15.2',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@types/prismjs': '^1.26.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Contextmenu.svelte': {
			svelte: './dist/Contextmenu.svelte',
			default: './dist/Contextmenu.svelte',
			types: './dist/Contextmenu.svelte.d.ts',
		},
		'./contextmenu.js': {default: './dist/contextmenu.js', types: './dist/contextmenu.d.ts'},
		'./ContextmenuEntry.svelte': {
			svelte: './dist/ContextmenuEntry.svelte',
			default: './dist/ContextmenuEntry.svelte',
			types: './dist/ContextmenuEntry.svelte.d.ts',
		},
		'./ContextmenuLinkEntry.svelte': {
			svelte: './dist/ContextmenuLinkEntry.svelte',
			default: './dist/ContextmenuLinkEntry.svelte',
			types: './dist/ContextmenuLinkEntry.svelte.d.ts',
		},
		'./ContextmenuSubmenu.svelte': {
			svelte: './dist/ContextmenuSubmenu.svelte',
			default: './dist/ContextmenuSubmenu.svelte',
			types: './dist/ContextmenuSubmenu.svelte.d.ts',
		},
		'./ContextmenuTextEntry.svelte': {
			svelte: './dist/ContextmenuTextEntry.svelte',
			default: './dist/ContextmenuTextEntry.svelte',
			types: './dist/ContextmenuTextEntry.svelte.d.ts',
		},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
	},
	modules: {
		'./Contextmenu.svelte': {path: 'Contextmenu.svelte', declarations: []},
		'./contextmenu.js': {
			path: 'contextmenu.ts',
			declarations: [
				{name: 'ContextmenuParams', kind: 'TypeAliasDeclaration'},
				{name: 'ContextmenuActionParams', kind: 'TypeAliasDeclaration'},
				{name: 'to_contextmenu_params', kind: 'VariableDeclaration'},
				{name: 'ItemState', kind: 'TypeAliasDeclaration'},
				{name: 'EntryState', kind: 'InterfaceDeclaration'},
				{name: 'SubmenuState', kind: 'InterfaceDeclaration'},
				{name: 'RootMenuState', kind: 'InterfaceDeclaration'},
				{name: 'ContextmenuRun', kind: 'InterfaceDeclaration'},
				{name: 'Contextmenu', kind: 'InterfaceDeclaration'},
				{name: 'ContextmenuStore', kind: 'InterfaceDeclaration'},
				{name: 'ContextmenuStoreOptions', kind: 'InterfaceDeclaration'},
				{name: 'create_contextmenu', kind: 'VariableDeclaration'},
				{name: 'open_contextmenu', kind: 'VariableDeclaration'},
				{name: 'set_contextmenu', kind: 'VariableDeclaration'},
				{name: 'get_contextmenu', kind: 'VariableDeclaration'},
				{name: 'set_contextmenu_submenu', kind: 'VariableDeclaration'},
				{name: 'get_contextmenu_submenu', kind: 'VariableDeclaration'},
				{name: 'set_contextmenu_dimensions', kind: 'VariableDeclaration'},
				{name: 'get_contextmenu_dimensions', kind: 'VariableDeclaration'},
			],
		},
		'./ContextmenuEntry.svelte': {path: 'ContextmenuEntry.svelte', declarations: []},
		'./ContextmenuLinkEntry.svelte': {path: 'ContextmenuLinkEntry.svelte', declarations: []},
		'./ContextmenuSubmenu.svelte': {path: 'ContextmenuSubmenu.svelte', declarations: []},
		'./ContextmenuTextEntry.svelte': {path: 'ContextmenuTextEntry.svelte', declarations: []},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
