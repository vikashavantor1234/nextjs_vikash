import { POST } from "@/app/mock-data/post";


export default function PostList(){
    return <>
        <div>
            {POST.map(post=>{
                return 
                <section key={post.id}>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>POST</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            })}
        </div>
    </>
}