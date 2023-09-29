<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';
	import ContextmenuSubmenu from '$lib/ContextmenuSubmenu.svelte';
	import {to_cats_label, type Cat, type HistoryItem} from '$routes/helpers.js';
	import CatContextmenu from '$routes/CatContextmenu.svelte';

	export let home_cats: Cat[];
	export let adventure_cats: Cat[];
	export let act: (item: HistoryItem) => void;

	$: cat_to_call_home = to_cats_label(adventure_cats);
</script>

<ContextmenuSubmenu>
	<svelte:fragment slot="icon">🏠</svelte:fragment>
	home
	<svelte:fragment slot="menu">
		{#if cat_to_call_home}
			<ContextmenuEntry run={() => act({type: 'call_cats_home'})}>
				<svelte:fragment slot="icon">🐈‍⬛</svelte:fragment>
				call
			</ContextmenuEntry>
		{/if}
		{#each home_cats as cat (cat.name)}
			<CatContextmenu name={cat.name} icon={cat.icon} position={cat.position} {act} />
		{/each}
		{#if !cat_to_call_home}
			<ContextmenuEntry run={() => act({type: 'call_cats_adventure'})}>
				<svelte:fragment slot="icon">🦋</svelte:fragment>
				leave
			</ContextmenuEntry>
		{/if}
	</svelte:fragment>
</ContextmenuSubmenu>
