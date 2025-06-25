import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/comments`
//GET
export async function GET(req, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${id}`)
        const comment = await response.json()
        if (!comment.id) {
            return NextResponse.json({ message: `Comment for ${id} not found` })
        }
        return NextResponse.json(comment)
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//UPDATE 
export async function PUT(req, { params }) {
    try {
        const id = (await params).id
        const { name, email, body } = await req.json()
        if (name || email || body) {
            const response = await fetch(`${url}/${+id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, body })
            })
            const updatedComment = await response.json()
            console.log(updatedComment)
            if (!updatedComment) {
                return NextResponse.json({ message: `Comment for ${id} not found` })
            }
            return NextResponse.json(updatedComment)
        }
        return NextResponse.json({ message: `Input is not available` })

    }
    catch (err) {
        // console.log(err)
        return NextResponse.json({ err })
    }
}

export async function DELETE(req, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${+id}`, {
            method: 'DELETE'
        })
        const comment = await response.json()
        return NextResponse.json({ message: 'Deleted' })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}