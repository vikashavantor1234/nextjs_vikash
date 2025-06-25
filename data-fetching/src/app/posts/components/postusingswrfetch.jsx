'use client'

import useSWR from "swr";

function fetcher(...args){
    return fetch(...args).then(res => res.json())
}

export default function FetchPostUsingSWR(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const {data, error, isLoading} = useSWR(url, fetcher);

    if(error){
        return <div>
            <h1> Failed To Return </h1>
        </div>
    } if(isLoading) {
        return <h1> Loading... </h1>
    }
    return <ul>
        {
            data.map(post => {
                return <div><h1 style={{ backgroundColor: "lightblue", padding: "20px" }}>Data Fetch using SWR</h1>
                <li key={post.id}>
                    <span>{post.title}</span>
                </li>
                </div>
            })
        }
    </ul>

}
