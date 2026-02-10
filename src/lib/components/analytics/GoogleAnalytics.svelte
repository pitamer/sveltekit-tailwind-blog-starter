<script>
	import { dev } from '$app/environment';
	import { page } from '$app/state';

	let { id = '' } = $props();

	$effect(() => {
		if (typeof gtag !== 'undefined' && id) {
			gtag('config', id, {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	{#if !dev && id}
		<script
			strategy="lazyOnload"
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
		></script>

		<script strategy="lazyOnload" id="ga-script">
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', id);
		</script>
	{/if}
</svelte:head>
