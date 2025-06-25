export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await fetch(url);
    return response.json();
}

//This is for build time
export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const response = await fetch(url);
    return response.json();

}

export default async function TodosDetailsPage({params}) {
    const id = (await params).id;
    const todo = await fetchTodosByid(Number(id));
    return <div>
        <h2>id {todo.id} </h2>
        <p> Title {todo.title} </p>
        <p> Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
    
}
//ssg page prepation:
//This method need to be overriden , this method is called during build phased
export async function generateStaticParams() {
    //write code to pepare details pages: prepare 200 todos details page
    const todos = await fetchTodos()
    //here we have to return an array which contains page name

    return todos.map(todo => {
        const id = todo.id.toString()
        //return page Name
        return {
            id: id // id-1.html,2.html....200.html
        }
    })

}