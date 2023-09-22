<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';
	import ContextmenuSubmenu from '$lib/ContextmenuSubmenu.svelte';
	import type {CatPosition, HistoryItem} from '$routes/library/Contextmenu/helpers';

	export let name = 'Cat';
	export let icon: string | null = '😺';
	export let position: CatPosition;
	export let act: (item: HistoryItem) => void;
</script>

<ContextmenuSubmenu>
	<svelte:fragment slot="icon">{icon}</svelte:fragment>
	{name}
	<svelte:fragment slot="menu">
		<ContextmenuEntry
			run={() => act({type: position === 'adventure' ? 'cat_go_home' : 'cat_go_adventure', name})}
		>
			<svelte:fragment slot="icon"
				>{#if position === 'adventure'}🏠{:else}🌄{/if}</svelte:fragment
			>
			{#if position === 'adventure'}go home{:else}go adventure{/if}
		</ContextmenuEntry>
		<ContextmenuEntry run={() => act({type: 'cat_be_or_do', name, position})}>
			<svelte:fragment slot="icon"
				>{#if position === 'adventure'}🌄{:else}🏠{/if}</svelte:fragment
			>
			{#if position === 'adventure'}do adventure{:else}be home{/if}
		</ContextmenuEntry>
	</svelte:fragment>
</ContextmenuSubmenu>
