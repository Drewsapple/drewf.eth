export const load = async ({ fetch }) => {
	const response = await fetch(`/api/courses`);
	const posts = await response.json();

	return {
		posts
	};
};
