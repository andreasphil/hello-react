import React, { useEffect, useState } from "react"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import TodoItem from "../components/TodoItem"

function App() {
  const [todos, setTodos] = useState(() => {
    const existing = localStorage.getItem("todos")
    return existing ? JSON.parse(existing) : []
  })

  const [newTodoText, setNewTodoText] = useState("")
  const [newTodoValid, setNewTodoValid] = useState(false)

  const allCount = todos.length
  const completedCount = todos.filter(({ done }) => done === true).length

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  let statusText
  let statusClass
  if (allCount === 0) {
    statusText = "No tasks"
    statusClass = "bg-gray-100"
  } else if (completedCount === allCount) {
    statusText = "All done!"
    statusClass = "bg-green-100 text-green-700"
  } else if (allCount > 0) {
    statusText = `Finished ${completedCount} of ${allCount}`
    statusClass = "bg-indigo-100 text-indigo-700"
  }

  function addTodo(event) {
    event.preventDefault()

    const newTodo = {
      id: todos.length,
      text: event.target.children.todoText.value,
      done: false,
    }

    setTodos([newTodo, ...todos])
    setNewTodoText("")
  }

  function handleNewTodoTextChange(event) {
    setNewTodoText(event.target.value)
    setNewTodoValid(event.target.validity.valid)
  }

  function setTodoStatus(todo, status = !todo.done) {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(({ id }) => id === todo.id)

    if (index >= 0) {
      updatedTodos[index].done = status
    }

    setTodos(updatedTodos)
  }

  function removeTodo(todo) {
    const updatedTodos = todos.filter(({ id }) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <main className="max-w-lg bg-white mx-auto rounded-xl px-6 py-8 shadow-lg">
      <header className="mb-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span
            className="
              bg-clip-text
              bg-gradient-to-r
              from-blue-400
              to-indigo-500
              text-transparent
            "
          >
            Todos
          </span>
        </h1>
        <form onSubmit={addTodo}>
          <TextInput
            name="todoText"
            label="Add a todo:"
            type="text"
            onChange={handleNewTodoTextChange}
            value={newTodoText}
            required
          />
          <Button
            disabled={!newTodoValid}
            className="w-full my-3"
            appearance="primary"
          >
            Add
          </Button>
        </form>
      </header>

      {/* TODO: Add empty state */}
      <ul className="-mx-6 divide-y divide-gray-100">
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            onStatusChanged={status => setTodoStatus(todo, status)}
            onRemoved={() => removeTodo(todo)}
          />
        ))}
      </ul>

      <footer className="text-sm text-center flex justify-between items-center mt-4">
        <span className={`px-2 py-1 rounded ${statusClass}`}>{statusText}</span>
        <a href="https://github.com/andreasphil/hello-react">
          Source on GitHub ↗
        </a>
      </footer>
    </main>
  )
}

export default App
