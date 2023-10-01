<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';

	export let toggle_about_dialog: () => void;
</script>

<ContextmenuEntry run={toggle_about_dialog}>
	<svelte:fragment slot="icon">?</svelte:fragment>
	About
</ContextmenuEntry>
