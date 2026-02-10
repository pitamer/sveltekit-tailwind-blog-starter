<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	let { data } = $props();
	const posts = $derived(data.posts);
	const tags = $derived(data.tags);
</script>

<Head title="Blog" />

<Blogs title="All Posts" {posts} {tags} />
