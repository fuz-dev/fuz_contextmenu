<script lang="ts">
	import {get_contextmenu, type ContextmenuParams} from '$lib/contextmenu.js';

	export let name = 'Cat';
	export let icon: string | null = '😺';
	export let showName = true;
	export let showIcon = true;
	export let contextmenuAction: ContextmenuParams | ContextmenuParams[] | null = null;

	const contextmenu = get_contextmenu();
</script>

<!-- TODO add link option? -->

<span class="cat" class:has-icon={showIcon} use:contextmenu.action={contextmenuAction}>
	{#if showIcon}<span class="icon">{icon}</span>{/if}{#if showName}<span class="name"
			><slot />{name}</span
		>{/if}
</span>

<style>
	.cat {
		display: flex;
		align-items: center;
	}
	.name {
		font-weight: 700;
	}
	.cat.has-icon .name {
		padding: 0 var(--spacing_xs3);
	}
	.icon {
		font-size: var(--icon_size_md);
	}
</style>
