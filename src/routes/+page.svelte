<script lang="ts">
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';

	import ContextmenuTome from '$routes/ContextmenuTome.svelte';

	const pkg_npm_url = 'https://npmjs.com/package/@fuz.dev/fuz_contextmenu';
	const pkg_name = '@fuz.dev/fuz_contextmenu';
	const pkg_repo_url = 'https://github.com/fuz-dev/fuz_contextmenu';
	const pkg_org_url = 'https://github.com/fuz-dev';
	const pkg_website_url = 'https://www.fuz.dev/';
	const pkg_website_name = 'fuz.dev';
</script>

<div class="width_md">
	<section>
		<blockquote>contextmenu for Svelte and Fuz</blockquote>
	</section>
	<div class="box">
		<section>
			<LibraryHeader {pkg_npm_url} {pkg_name} {pkg_repo_url} />
		</section>
	</div>
	<section>
		<ContextmenuTome />
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
</style>
