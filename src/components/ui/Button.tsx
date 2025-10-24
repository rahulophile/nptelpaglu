import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
}

const Button = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md min-w-[140px]";

  const variantClasses = {
    primary: `bg-purple-600 text-white hover:bg-purple-700 ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`,
    secondary: `bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50 ${props.disabled ? "opacity-40 cursor-not-allowed shadow-none" : ""}`,
    success: `bg-green-600 text-white hover:bg-green-700 ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`,
  };

  const IconComponent =
    icon && React.isValidElement(icon) ? React.cloneElement(icon, { className: "h-5 w-5" }) : null;

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={!props.disabled ? { y: -3, scale: 1.02 } : {}}
      whileTap={!props.disabled ? { scale: 0.98 } : {}}
      {...props} // ✅ spread native button props like onClick, disabled
    >
      {iconPosition === "left" && IconComponent}
      {children}
      {iconPosition === "right" && IconComponent}
    </motion.button>
  );
};

export default Button;
