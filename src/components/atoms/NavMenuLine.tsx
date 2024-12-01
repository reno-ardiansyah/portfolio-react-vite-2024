import {motion, Variants} from 'framer-motion'

const NavMenuLine = ({isOpen, variant}: {isOpen: boolean, variant: Variants}) => {
  return (
    <motion.div
      className={`w-9 h-1 ${isOpen ? "bg-black " : "bg-white "} rounded my-1`}
      variants={variant}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    />
  );
};

export default NavMenuLine;
