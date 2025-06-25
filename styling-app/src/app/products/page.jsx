import Image from "next/image"

export async function fetchProducts() {
    const url = `https://fakestoreapi.com/products`;
    const response = await fetch(url)
    const products = await response.json()
    return products
}


export default async function Page() {
    const products = await fetchProducts()

    return <div>
        {
            products.map(product => {
                return <section key={product.id}>
                    <h1>Id : {product.id}</h1>
                    <h2>{product.title}</h2>
                    <Image src={product.image} alt="Product" height={200} width={200} />
                </section>
            })
        }
    </div>
}