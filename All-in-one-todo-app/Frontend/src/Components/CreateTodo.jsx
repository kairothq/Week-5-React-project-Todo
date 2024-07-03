export function CreateTodo() {
    return <div>
        <input type="text" placeholder="title"></input> <br/>
        <input type="text" placeholder="description"></input> <br/>
        <button style={{margin:10, padding:20 }}> Add a todo</button>
    </div>
}