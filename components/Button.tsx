import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => (
  <button
    className={`px-4 py-2 rounded-md ${style || "bg-blue-500 text-white"}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
