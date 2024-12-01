import { motion } from "framer-motion";

const NavNavigateText = ({text, className, delay = 0, icon}: {text: string, delay: number, className: string, icon?: any}) => {
  return (
    <motion.h3
      className={className}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      {icon && icon}
      {text}
    </motion.h3>
  );
};

export default NavNavigateText;
