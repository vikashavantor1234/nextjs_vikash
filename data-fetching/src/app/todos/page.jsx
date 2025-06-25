export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const response = await fetch(url);
    const todos = response.json();
    return todos;
    
}

export default async function Todos() {
    const todos = await fetchTodos();
    console.log(todos);

    return <div>
        <ul>
            {
                todos.map(todos => {
                    return <li key={todos.id}>
                        <span>{todos.title}</span>
                    </li>
                })
            }
        </ul>
    </div>
}