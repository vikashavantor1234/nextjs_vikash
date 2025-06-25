export default async function Products() {
    const PRODUCTS = [{
        id: 1,
        name: 'Laptop'
    }]

    return <ul>
    {
        PRODUCTS.map(product => {
            return <li key={product.id}>
                <span>{product.name}</span>
            </li>
        })
    }
</ul>

}