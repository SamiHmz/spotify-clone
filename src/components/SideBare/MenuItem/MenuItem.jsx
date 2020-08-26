import React from "react";
import "./MenuItem.css";
function MenuItem({ Icon, text, style }) {
  const classes = style ? `menuItem ${style}` : "menuItem";
  return (
    <div className={classes}>
      <Icon />
      <span>{text}</span>
    </div>
  );
}

export default MenuItem;
