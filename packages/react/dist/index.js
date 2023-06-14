"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  MyButton: () => MyButton
});
module.exports = __toCommonJS(src_exports);

// src/styles/MyButton.css.ts
var myButton = "sprinkles_fontFamily_default__qzbbz14z sprinkles_backgroundColor_ignite300__qzbbz19q sprinkles_borderRadius_md__qzbbz158 sprinkles_padding_8__qzbbz15i sprinkles_color_white__qzbbz192 sprinkles_fontSize_xs__qzbbz14k";

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var MyButton = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: myButton, children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MyButton
});
