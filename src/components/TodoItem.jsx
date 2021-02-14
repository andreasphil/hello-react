import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

export default function TodoItem({
  todo,
  onStatusChanged = () => {},
  onRemoved = () => {},
}) {
  return (
    <li key={todo.id} className="px-6 py-4 flex items-center space-x-2">
      <label className="flex-grow flex-shrink">
        <input
          type="checkbox"
          className="mr-2"
          name={`todo${todo.id}Status`}
          checked={todo.done}
          onChange={() => onStatusChanged(event.target.value.checked)}
        />
        {todo.text}
      </label>
      <Button onClick={onRemoved}>🗑</Button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }),
  onStatusChanged: PropTypes.func,
  onRemoved: PropTypes.func,
}
