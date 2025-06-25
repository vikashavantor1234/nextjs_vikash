'use client'

export default function Client(props){
    return <div>
        <h1> Client Component</h1>

        {/* server component */}
        {props.children}
    </div>
}