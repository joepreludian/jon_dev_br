import type React from "react";
import { Link } from "@tanstack/react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to: string;
  target?: string;
}

export default function Button({
  children,
  className = "",
  to,
  ...props
}: ButtonProps) {
  return (
    <Link to={to} {...(props as any)}>
      <button className={`is-a-button ${className}`} {...props}>
        {children}
      </button>
    </Link>
  );
}
