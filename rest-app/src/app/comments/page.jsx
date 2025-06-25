const url = 'http://localhost:3000/api/comments'

export async function fetchComments() {
    const response = await fetch(url);
  
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
  
    const comments = await response.json(); // ✅ await here
    return comments;
  }
  
  export default async function CommentsPage() {
    let comments = [];
  
    try {
      comments = await fetchComments();
    } catch (error) {
      console.error("Failed to fetch comments:", error);
      return <div>Error fetching comments: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <span>{comment.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }