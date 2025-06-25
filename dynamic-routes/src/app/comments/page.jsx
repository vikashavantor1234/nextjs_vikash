
import Link from "next/link";
export async function fetchComments(){
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url, {
        method: 'GET'
    });

    const comments = await res.json();

    return comments;

}

export default async function CommentsPage() {
    const comments = await fetchComments()
    return <div>
            <ul>
                {comments.map(comment=>{
                    return <li key={comment.id}>
                        <Link href={{pathname:`/comments/${comment.id}`}}>
                                <span>{comment.name}</span>                                
                        </Link>
                    </li>
                })}
            </ul>
    </div>
}