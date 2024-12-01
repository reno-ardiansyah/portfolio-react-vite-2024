import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SocialLinkProps = {
  icon: JSX.Element;
  href: string;
  className?: string;
  delay?: number
};


const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  href,
  className = "",
  delay = 0
}) => (
  <motion.div
    className={`flex justify-center items-center ${className}`}
    whileHover={{ scale: 1.2 }}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-black transition duration-200 text-2xl"
    >
      {icon}
    </Link>
  </motion.div>
);

export default SocialLink;
