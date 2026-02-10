<script>
	import { dev } from '$app/environment';

	let { domain = '' } = $props();
</script>

<svelte:head>
	{#if !dev && domain}
		<script defer data-domain={domain} src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>
