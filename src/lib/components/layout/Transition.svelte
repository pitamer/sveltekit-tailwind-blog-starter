<script>
	import { fly } from 'svelte/transition';

	let { pathname = '', children } = $props();
</script>

{#key pathname}
	<div in:fly={{ x: -5, duration: 500, delay: 500 }}>
		{@render children?.()}
	</div>
{/key}
