import React, { Suspense } from "react"
//simulate delay using timer with promise

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100000, import('../components/greeter'))
    })
})
const Products = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 120000, import('../components/products'))
    })
})
export default function Dashboard() {
    return <div>
        <h1>Header</h1>
        <Suspense fallback={<h1>Welcome is Loading...</h1>}>
            <Welcome />
        </Suspense>
        <Suspense fallback={<h1>Products is loading...</h1>}>
            <Products/>
        </Suspense>
        <h1>Footer</h1>
    </div>
}