<script lang="ts">
	import {base} from '$app/paths';

	import Footer from '$routes/Footer.svelte';
</script>

<!-- <h1>@fuz.dev/fuz</h1> -->
<!-- TODO publish and link the above to npm -->

<div class="width_md">
	<section>
		<blockquote>friendly user zystem</blockquote>
	</section>
	<section>
		<code class="chip"
			>npm i -D&nbsp;<a class="chip" href="https://npmjs.com/package/@fuz.dev/fuz">@fuz.dev/fuz</a
			></code
		>
	</section>
	<section>
		<a class="library-link panel" href="{base}/library">library</a>
	</section>
	<section>
		<Footer />
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
