import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ icon, bgColor, color, size, text, borderRadius, border }) => {
  const { setIsClicked } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(false)}
      style={{ backgroundColor: bgColor, color, borderRadius, border }}
      className={`text-${size} py-3 px-4 hover:drop-shadow-xl capitalize`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
