import React from "react"
import PropTypes from "prop-types"

export default function TextInput({ name, label, ...rest }) {
  return (
    <>
      {label ? (
        <label
          htmlFor={name}
          className="block text-sm text-gray-500 font-medium mb-1 px-3"
        >
          {label}
        </label>
      ) : null}
      <input
        {...rest}
        name={name}
        className="
          bg-gray-100
          block
          border
          border-transparent
          focus:bg-white
          focus:border-indigo-500
          focus:outline-none
          focus:ring-4
          px-3
          py-2
          ring-indigo-500
          ring-opacity-10
          rounded
          transition-colors
          w-full
        "
      />
    </>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}
