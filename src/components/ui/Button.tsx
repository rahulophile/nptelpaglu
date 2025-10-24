import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion"; // ✅ type-only import
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
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
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md min-w-[140px]";

  const variantClasses = {
    primary: `bg-purple-600 text-white hover:bg-purple-700 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
    secondary: `bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50 ${disabled ? "opacity-40 cursor-not-allowed shadow-none" : ""}`,
    success: `bg-green-600 text-white hover:bg-green-700 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
  };

  const IconComponent =
    icon && React.isValidElement(icon) ? React.cloneElement(icon, { className: "h-5 w-5" }) : null;

  // ✅ Motion props type safe
  const motionProps: HTMLMotionProps<"button"> = {
    whileHover: !disabled ? { y: -3, scale: 1.02 } : undefined,
    whileTap: !disabled ? { scale: 0.98 } : undefined,
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...motionProps} // ✅ spread type-safe motion props
      {...props} // ✅ spread native button props
    >
      {iconPosition === "left" && IconComponent}
      {children}
      {iconPosition === "right" && IconComponent}
    </motion.button>
  );
};

export default Button;
