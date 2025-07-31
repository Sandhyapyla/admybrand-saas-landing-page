import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const base = "px-6 py-3 rounded-xl text-white font-semibold transition";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 shadow-lg",
    secondary: "bg-gray-800 hover:bg-gray-900",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
