<script lang="ts">
	import PackageSummary from '@fuz.dev/fuz_library/PackageSummary.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package.js';

	import ContextmenuTome from '$routes/ContextmenuTome.svelte';
	import package_json from '../static/.well-known/package.json'; // TODO SvelteKit warning

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="width_full box">
	<div class="width_md">
		<section class="box">
			<PackageSummary {pkg} />
		</section>
		<section>
			<ContextmenuTome />
		</section>
		<section><LibraryFooter {pkg} root_url="https://www.fuz.dev/" /></section>
	</div>
</main>

<style>
	section {
		margin-top: var(--spacing_xl3);
		margin-bottom: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
