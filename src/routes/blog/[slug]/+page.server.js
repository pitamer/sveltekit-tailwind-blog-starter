import { error } from '@sveltejs/kit';
import { getEntries } from '$utils/entries.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = await getEntries('posts');
	const authors = await getEntries('authors');
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);
	const author = authors.find((a) => a.name === post.author);

	if (!post) {
		error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		post: post,
		author: author
	};
}
