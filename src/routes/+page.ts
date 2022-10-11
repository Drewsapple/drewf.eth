export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts: {meta: any, path: string}[] = await response.json();

	const categorizedPosts = posts.reduce((accum, post) => {
		// Grab folder name
		const category = post.meta.category
		// add to category/ create category if new
		accum[category] = accum[category] ? [...accum[category], post] : [post]
		return accum
	}, {})

	return categorizedPosts;
};
