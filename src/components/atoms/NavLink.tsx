import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLink = ({title, href = '#', delay = 0.6}: {title: string, href?: string, delay?: number}) => {
  return (
    <motion.li
      className="text-4xl font-semibold mb-6"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ delay }}
    >
      <Link to={href}>{title}</Link>
    </motion.li>
  );
};

export default NavLink;
