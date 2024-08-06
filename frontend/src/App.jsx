import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  //biggest bug, sends out infinite requests to backend 
  fetch("http://localhost:3000/todos")
  .then(async function (response) {
    const json = await response.json();
    console.log(json);
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
