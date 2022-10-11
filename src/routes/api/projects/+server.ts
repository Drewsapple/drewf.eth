import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';


export const GET = async () => {
	const allPosts = (await fetchMarkdownPosts()).filter(post => post.meta.category == "projects");

	return json(allPosts);
};
