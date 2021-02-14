import React from "react"
import "./Button.css"
import PropTypes from "prop-types"

export default function Button({
  children,
  className,
  appearance = "normal",
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`
        block
        button
        font-medium
        px-3
        py-2
        rounded
        transition-all
        ${appearance ? `button--${appearance}` : ""}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.string,
}
