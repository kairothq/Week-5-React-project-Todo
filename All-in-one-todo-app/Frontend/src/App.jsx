import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// this is what we did 
import { CreateTodo } from './Components/CreateTodo' 
import { Todos } from './Components/Todos'


function App() {

  const [todos, setTodos] = useState();
  
  fetch("https://localhost/3000").then(async function(res){
    const json = await res.json();
    setTodos(json.todos());
  })
  return (
  // we can't return directly and need to have atleast one of the parent div there and in that we can write things to return 
  <div> 
    <CreateTodo></CreateTodo>
    <Todos>todos = {todos}</Todos>
  </div>
  )
}

export default App
