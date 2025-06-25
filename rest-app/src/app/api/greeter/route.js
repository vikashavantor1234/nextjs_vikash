import { NextResponse } from "next/server";

export async function GET(req) {
    //resonse
    return NextResponse.json({ message: 'Welcome to Rest api' })
}