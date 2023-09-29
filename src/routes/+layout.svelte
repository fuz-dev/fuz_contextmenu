<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '@fuz.dev/fuz_code/prism.css';

	import 'prismjs';
	import 'prism-svelte';

	import {set_devmode} from '@fuz.dev/fuz_library/devmode.js';
	import DevmodeControls from '@fuz.dev/fuz_library/DevmodeControls.svelte';
	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';

	import Nav from '$routes/Nav.svelte';
	import {tomes} from '$routes/tomes.js';

	const devmode = set_devmode(false);

	set_tomes(new Map(tomes.map((t) => [t.name, t])));
</script>

<Themed>
	<main>
		<Nav />
		<slot />
	</main>
</Themed>
<DevmodeControls {devmode} />

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
