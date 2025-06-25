import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/comments`
//GET
export async function GET(req) {
    const response = await fetch(url)
    const comments = await response.json()
    return NextResponse.json(comments)
}
//POST
export async function POST(req) {
    //read Payload
    const comment = await req.json()
    //send payload to jsonPlaceholder
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    const newComment = await response.json()
    return new NextResponse(JSON.stringify(newComment), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
            'url': '/api/create'
        }
    })
}