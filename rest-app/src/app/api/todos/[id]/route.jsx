import todos from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

// export async function GET(req,obj) {
//     console.log(await obj.params)
//     return NextResponse.json({ message: 'test' })
// }

export async function GET(req, { params }) {
    const id = (await params).id
    const todo = todos.find(todo => todo.id === +id)
    return NextResponse.json(todo)
}