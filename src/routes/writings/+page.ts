export const load = async ({ fetch }) => {
	const response = await fetch(`/api/writings`);
	const posts = await response.json();

	return {
		posts
	};
};
