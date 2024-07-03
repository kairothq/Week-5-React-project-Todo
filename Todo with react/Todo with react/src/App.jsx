import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); // this is predefining of todos 

  function addTodo() {
    // if todos = [1, 2]
    // [...todos, 3] => [1, 2, 3] here "..." means all the defined todos till now and then 3 is added to it each time its called
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} /> // these properties are passed as props 
      })}

    </div>
  )
}
// this is to maintain individual toods
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App