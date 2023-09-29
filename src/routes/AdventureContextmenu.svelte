<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';
	import ContextmenuSubmenu from '$lib/ContextmenuSubmenu.svelte';
	import {type HistoryItem, type Cat, to_cats_label} from '$routes/helpers';
	import CatContextmenu from '$routes/CatContextmenu.svelte';

	export let home_cats: Cat[];
	export let adventure_cats: Cat[];
	export let act: (item: HistoryItem) => void;

	$: cat_to_call_to_adventure = to_cats_label(home_cats);
</script>

<ContextmenuSubmenu>
	<svelte:fragment slot="icon">🌄</svelte:fragment>
	adventure
	<svelte:fragment slot="menu">
		{#if cat_to_call_to_adventure}
			<ContextmenuEntry run={() => act({type: 'call_cats_adventure'})}>
				<svelte:fragment slot="icon">🦋</svelte:fragment>
				call
			</ContextmenuEntry>
		{/if}
		{#each adventure_cats as cat (cat.name)}
			<CatContextmenu name={cat.name} icon={cat.icon} position={cat.position} {act} />
		{/each}
		{#if !cat_to_call_to_adventure}
			<ContextmenuEntry run={() => act({type: 'call_cats_home'})}>
				<svelte:fragment slot="icon">🐈‍⬛</svelte:fragment>
				leave
			</ContextmenuEntry>
		{/if}
	</svelte:fragment>
</ContextmenuSubmenu>
