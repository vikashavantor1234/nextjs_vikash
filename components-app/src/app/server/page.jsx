import Client from "./components/client"

export default function ServerPage(){
    return <div>
        {/* client */}
        <Client>
            {/* Pass server component to the client as props, so that server component never becomes client component */}
        </Client>
    </div>
}