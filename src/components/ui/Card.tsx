// src/components/ui/Card.tsx

import { motion } from 'framer-motion';

type CardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

const Card = ({ title, description, onClick }: CardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-6 cursor-pointer border-2 border-transparent hover:border-brand-purple transition-all duration-300"
      
      // Animation variants for stagger effect
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      
      // More subtle hover and tap animations
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <h3 className="text-xl font-bold text-brand-dark-text mb-2">{title}</h3>
      <p className="text-brand-purple font-medium">{description}</p>
    </motion.div>
  );
};

export default Card;