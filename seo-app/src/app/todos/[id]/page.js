const url = `https://jsonplaceholder.typicode.com/todos/`

export async function fetchTodoById(id) {
    const response = await fetch(`${url}/${id}`)
    return response.json()
}

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

//this method is called to set dynamic meta data.
export async function generateMetadata({ params, searchParms }, parent) {
    const id = (await params).id
    const todo = await fetchTodoById(Number(id))
    //must return meta data object
    return {
        title: todo.title,
        description: todo.title
    }
}

//ssg code
export async function generateStaticParams() {
    const todos = await fetchTodos()

    return todos.map(todo => {
        const id = todo.id.toString()
        return {
            id: id
        }
    })
}


export default async function TodosDetailsPage({ params }) {
    const id = (await params).id
    const todo = await fetchTodoById(Number(id))
    return <div>
        <h1>{id}</h1>
        <p>{todo.title}</p>
        <h2>{todo.status ? 'done' : 'Not done'}</h2>
    </div>
}