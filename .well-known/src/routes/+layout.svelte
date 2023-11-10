<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '@fuz.dev/fuz_code/prism.css';

	import 'prismjs';
	import 'prism-svelte';

	import {set_devmode} from '@fuz.dev/fuz_library/devmode.js';
	import Devmode_Controls from '@fuz.dev/fuz_library/Devmode_Controls.svelte';
	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import {set_tomes} from '@fuz.dev/fuz_library/tome.js';

	import {tomes} from '$routes/tomes.js';

	const devmode = set_devmode(false);

	set_tomes(new Map(tomes.map((t) => [t.name, t])));
</script>

<Themed>
	<slot />
</Themed>
<Devmode_Controls {devmode} />
