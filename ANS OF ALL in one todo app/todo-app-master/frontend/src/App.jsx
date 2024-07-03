import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
// this json.todos is accessing the todos property from JSON objected returned by the server 
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos> 
    </div>
    // this todos={todos} is passing the state variable as with property(prop) to the component Todos
  )
}

export default App
