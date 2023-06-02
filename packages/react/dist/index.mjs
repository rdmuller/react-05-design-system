// src/styles/MyButton.css.ts
var myButton = "MyButton_myButton__1y0yztd0";

// src/ButtonCss.tsx
import { jsx } from "react/jsx-runtime";
function ButtonCss({ children }) {
  const buttonStyle = {
    borderRadius: "8px",
    padding: "2rem",
    backgroundColor: "blue",
    color: "white",
    border: 0
  };
  return /* @__PURE__ */ jsx("button", { style: buttonStyle, children });
}

// src/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var MyButton = ({
  children
}) => {
  return /* @__PURE__ */ jsx2("button", { className: myButton, children });
};
export {
  ButtonCss,
  MyButton
};
