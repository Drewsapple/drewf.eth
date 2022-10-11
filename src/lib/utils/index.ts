export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob([
		"/src/routes/projects/*.svx",
		"/src/routes/courses/*.svx",
		"/src/routes/writings/*.svx",
	]);

	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.split('.')[0].slice(11);
			// Grab folder name
			if(metadata) {
				metadata.category = postPath.split('/')[1] 
				return {
					meta: metadata,
					path: postPath
				};
			}
			else {
				return {
					meta: {category: postPath.split('/')[1], hidden: true },
					path: postPath
				};
			}

		})
	);

	return allPosts.filter(post => !post.meta.hidden);
};
