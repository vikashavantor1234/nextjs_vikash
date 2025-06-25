'use client'

import MyServer from "./myServer"
export default function MyClient(){
    return <div>
        <h1> Client component uses another server component</h1>
        <MyServer/>
    </div>
}