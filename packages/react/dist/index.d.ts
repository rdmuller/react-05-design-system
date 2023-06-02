import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonCssProps {
    children?: React.ReactNode;
}
declare function ButtonCss({ children }: ButtonCssProps): react_jsx_runtime.JSX.Element;

interface ButtonProps {
    children?: React.ReactNode;
}
declare const MyButton: React.FC<ButtonProps>;

export { ButtonCss, MyButton };
