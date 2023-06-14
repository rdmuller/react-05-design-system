// src/styles/MyButton.css.ts
var myButton = "sprinkles_fontFamily_default__qzbbz14z sprinkles_backgroundColor_ignite300__qzbbz19q sprinkles_borderRadius_md__qzbbz158 sprinkles_padding_8__qzbbz15i sprinkles_color_white__qzbbz192 sprinkles_fontSize_xs__qzbbz14k";

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var MyButton = ({ children }) => {
  return /* @__PURE__ */ jsx("button", { className: myButton, children });
};
export {
  MyButton
};
