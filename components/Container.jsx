import React from "react";

/**
 * A customizable Container component to wrap sections.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to render inside the container.
 * @param {string} [props.className] - Additional classes to style the container.
 * @param {string} [props.tag] - The HTML tag to use for the container (default: 'div').
 * @param {Object} [props.style] - Inline styles to apply to the container.
 */
const Container = ({
  children,
  className = "",
  tag = "div",
  style = {},
  id = "",
  ...rest
}) => {
  const Component = tag;
  return (
    <Component
      id={id}
      className={`mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Container;
