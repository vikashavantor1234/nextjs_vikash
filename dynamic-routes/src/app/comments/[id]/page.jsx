export async function fetchCommentsById(id) {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;

    const res = await fetch(url);
    const comment = await res.json();
    return comment;
    
}

export default async function CommentsDetailsPage(props) {
    const id = (await props.params).id;
    const comment = await fetchCommentsById(+id);
    console.log("comments", comment);

    return <div>
        <h1>{id}</h1>
        <h2>{comment.name}</h2>
        <h2>{comment.email}</h2>
        <h2>{comment.body}</h2>
    </div>
}