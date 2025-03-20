import React from "react";

import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  label,
  ...props
}) => {
  const baseClasses =
    "text-preset-5 py-4 px-10 rounded-full transition-colors  active:scale-95 focus:outline-none";

  const styleClasses = primary
    ? "bg-cyan-600 text-white hover:bg-cyan-300 focus:ring-cyan-600"
    : "bg-purple-600 text-white hover:bg-purple-300 focus:ring-purple-600";

  const classes = [baseClasses, styleClasses].join(" ");

  return (
    <button
      type="button"
      className={classes}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
