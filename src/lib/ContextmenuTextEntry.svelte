<script lang="ts">
	import ContextmenuEntry from '$lib/ContextmenuEntry.svelte';
	import type {ContextmenuRun} from '$lib/contextmenu';

	// TODO consider making this the implicit default entry, so consumers can simply declare `{run, content}`

	export let content: string;
	export let icon: string;
	export let run: ContextmenuRun;
</script>

<ContextmenuEntry {run}>
	<svelte:fragment slot="icon">{icon}</svelte:fragment>
	{content}
</ContextmenuEntry>
