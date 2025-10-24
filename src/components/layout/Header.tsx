// src/components/layout/Header.tsx

import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from 'framer-motion';
type HeaderProps = {
  title?: string; 
  showBackButton?: boolean;
  onBack?: () => void; 
};

const Header = ({ title, showBackButton = false, onBack }: HeaderProps) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            {showBackButton ? (
              <motion.button onClick={onBack} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center gap-1 text-purple-600 font-semibold">
                <IoChevronBack size={24} />
              </motion.button>
            ) : (
              <img
                src="/images/logo.png"
                alt="App Logo"
                className="h-8 w-200 object-contain"
              />
            )}
          </div>
          <div className="w-1/3 text-center">
            <h2 className="text-lg font-semibold text-brand-dark-text truncate"> {title} </h2>
          </div>
          <div className="w-1/3 flex justify-end">
            {/* YAHAN CHANGE KIYA HAI: text-brand-dark-text ko text-purple-600 kar diya hai */}
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className="text-purple-920">
              <HiOutlineMenu size={26} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;