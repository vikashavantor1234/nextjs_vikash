import PRODUCTS from "@/app/mock-data/products";

export default async function ProductDetails(props){
    const id = (await props.params).id;

    //Read product details

    const product = PRODUCTS.find(product => product.id === Number(id))

    return <div>
        <h1>
            {id}
        </h1>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>

}