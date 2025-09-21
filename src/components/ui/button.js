import React from "react";



export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 active:scale-95";
  const hover = "hover:bg-black hover:text-white";
  const variants = {
    default: `bg-gradient-to-r from-primary to-primary/80 text-primary-foreground ${hover}`,
    outline: `border-2 border-primary text-primary bg-white ${hover}`,
    secondary: `bg-secondary text-secondary-foreground ${hover}`,
  };
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-6 text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
