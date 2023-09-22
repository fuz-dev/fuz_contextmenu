<script lang="ts">
	import type {ThemeVariable} from '@fuz.dev/fuz/theme.js';

	export let variable: ThemeVariable;
</script>

<div class="variable">
	<div class="name"><code>--{variable.name}</code></div>
	<label>
		<small class="title">light</small>
		<input disabled={true} value={variable.light ?? ''} />
	</label>
	<br />
	<label>
		<small class="title">dark</small>
		<input disabled={true} value={variable.dark ?? ''} />
	</label>
</div>

<style>
	.variable {
		align-items: flex-start;
		/* ... */
		padding: var(--spacing_xs) 0;
	}
	.name {
		font-size: var(--size_xl);
		text-align: center;
		margin-bottom: var(--spacing_xl);
	}
</style>
