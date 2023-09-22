<script lang="ts">
	import {base} from '$app/paths';

	// TODO add contextmenu behavior

	export let name: string; // TODO type, generate from `library_items`?
	export let code_attrs: any = undefined;
</script>

<code {...code_attrs}><a href="{base}/library/{name}"><slot>{name}</slot></a></code>
