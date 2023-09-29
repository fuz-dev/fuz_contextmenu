<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@grogarden/util/dom.js';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	// TODO delete, use `LibraryHeader` when it's ready

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	$: ({pathname} = $page.url);
	$: root = pathname === '/';

	// TODO this is a hack to hide the nav for the mural when it's iframed, what's a better way?
	const iframed = is_iframed();
	const enabled = !iframed;
</script>

<!-- TODO probably change to ul/li once styles are right -->

{#if enabled}
	<nav class:root>
		<Breadcrumb>
			{#if root}
				<span>@fuz.dev/fuz_contextmenu</span>
			{:else}
				<span class="icon">🧶</span>
			{/if}
		</Breadcrumb>
	</nav>
{/if}

<style>
	nav {
		font-size: var(--size_xl);
	}
	.root {
		--text_decoration_selected: none;
	}
	.icon {
		font-size: var(--size_md);
	}
</style>
