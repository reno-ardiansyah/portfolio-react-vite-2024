import { ReactNode } from "react";
import { motion } from "framer-motion";

const NavNavigation = ({className, children} : {className: string, children: ReactNode}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }} 
      exit={{ y: -50, opacity: 0 }} 
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default NavNavigation;
