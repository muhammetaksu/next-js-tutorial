export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    return res.json();
}

export async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => data);

    return res;
}
