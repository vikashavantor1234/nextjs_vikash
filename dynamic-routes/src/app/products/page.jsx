import PRODUCTS from "@/app/mock-data/products"
import Link from "next/link"

export default function Products() {
    return <div>
        {
            PRODUCTS.map(product => {
                return <section key={product.id}>
                   <Link href={{pathname:`/products/${product.id}`}}>{product.title}</Link>
                </section>
            })
        }
    </div>
}