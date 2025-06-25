import todos from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json(todos)
}