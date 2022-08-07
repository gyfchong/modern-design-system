import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyles } from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
