
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {
// this top one is object destrucing i.e. importing todos as prop directly inside the Todos fn 
    return <div>
        {todos.map(function(todo) { // this means it take input and fn inside and then give output directly out for all the inputs 
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button> 
            </div>
            // display button element as "Completed" if todo.completed=true otherwise show "Mark as Complete"
        })}
    </div>
}