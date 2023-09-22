<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';

	export let toggleAboutDialog: () => void;
</script>

<ContextmenuEntry run={toggleAboutDialog}>
	<svelte:fragment slot="icon">?</svelte:fragment>
	About
</ContextmenuEntry>
