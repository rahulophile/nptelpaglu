// src/components/ui/Button.tsx

import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
};

const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
}: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md min-w-[140px]';

  const variantClasses = {
    // PRIMARY VARIANT - YAHAN DISABLED STATE KA STYLE THEEK KIYA HAI
    primary: `bg-purple-600 text-white hover:bg-purple-700 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    
    secondary: `bg-transparent text-purple-600 border-2 border-purple-600 hover:bg-purple-50 ${disabled ? 'opacity-40 cursor-not-allowed shadow-none' : ''}`,
    
    success: `bg-green-600 text-white hover:bg-green-700 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
  };

  const IconComponent = icon && React.isValidElement(icon) 
    ? React.cloneElement(icon, { className: "h-5 w-5" }) 
    : null;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={!disabled ? { y: -3, scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {iconPosition === 'left' && IconComponent}
      {children}
      {iconPosition === 'right' && IconComponent}
    </motion.button>
  );
};

export default Button;