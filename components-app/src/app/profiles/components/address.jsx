export default function Address({ address: { street, city, zipcode, suite } }) {
    return <address>
        <p>{street} , <span>{city}</span> ,<span>{suite}</span>,<span>{zipcode}</span></p>
    </address>
}