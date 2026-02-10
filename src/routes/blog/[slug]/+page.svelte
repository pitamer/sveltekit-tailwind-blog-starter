<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Comments from '$lib/components/comment/index.svelte';

	let { data } = $props();
	const post = $derived(data.post);
	const author = $derived(data.author);
</script>

<Head title={post.title} />

<Blog {post} {author} />
<Comments />
