import React, { FC } from "react";
import "./Button.css";
interface IButtonProps {
  variant: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export const Buttons: FC<IButtonProps> = (props) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
