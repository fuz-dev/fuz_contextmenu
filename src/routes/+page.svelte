<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import ContextmenuLibraryItem from './ContextmenuLibraryItem.svelte';

	const pkg_repo_url = 'https://github.com/fuz-dev/fuz_contextmenu';
	const pkg_org_url = 'https://github.com/fuz-dev';
	const pkg_website_url = 'https://www.fuz.dev/';
	const pkg_website_name = 'fuz.dev';
</script>

<!-- <h1>@fuz.dev/fuz</h1> -->
<!-- TODO publish and link the above to npm -->

<div class="width_md">
	<section>
		<blockquote>contextmenu for Svelte and Fuz</blockquote>
	</section>
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a class="chip" href="https://npmjs.com/package/@fuz.dev/fuz_contextmenu"
				>@fuz.dev/fuz_contextmenu</a
			></code
		>
	</section>
	<section>
		<ContextmenuLibraryItem />
	</section>
	<section>
		<LibraryFooter {pkg_repo_url} {pkg_org_url} {pkg_website_url} {pkg_website_name} />
	</section>
</div>

<style>
	section {
		padding: var(--spacing_xl2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	code {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: var(--size_lg);
		white-space: nowrap;
	}
	.panel {
		padding: var(--spacing_xl2);
		font-size: var(--size_xl);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.library-link {
		font-size: var(--size_xl3);
	}
</style>
