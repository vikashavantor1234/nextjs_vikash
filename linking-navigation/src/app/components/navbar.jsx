'use client'

import { usePathname } from "next/navigation"

export default function NavBar(){

    const pathname = usePathname();
    console.log("Path Name", pathname);
    
    return <nav>
        <ul>
            <li>
                <Link className={`${pathname === '/' ? 'active' : ''}`} href={{pathname: '/'}}> Home </Link>
            </li>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{pathname: '/about'}}> About </Link>
            </li>
            <li>
                <Link className={`${pathname === '/clients' ? 'active' : ''}`} href={{pathname: '/clients'}}> Clients </Link>
            </li>
            <li>
                <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{pathname: '/dashboard'}}> Dashboard </Link>
            </li>
        </ul>
    </nav>
}