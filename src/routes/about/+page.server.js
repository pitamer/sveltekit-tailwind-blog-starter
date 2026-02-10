import { getEntries } from '$utils/entries.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const authors = await getEntries('authors');
	return {
		// eslint-disable-next-line no-unused-vars
		authors: authors
	};
}
