'use client'

import { useRouter } from "next/navigation"

export default function DashboardNavigator(){
    const router = useRouter();

    return <div>
    <div>
        <button onClick={() => {
            router.push('/')
        }}>Home</button>
    </div>
    <div style={pt-10}>
        <button onClick={() => {
            router.push('/clients')
        }}>Clients</button>
    </div>
    <div>
        <button onClick={() => {
            router.push('/about')
        }}>About</button>
    </div>
</div>
}