import { pageTransition, pageVariants } from "@/animations/animationVariants";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <h1>About Us</h1>
    </motion.div>
  );
};

export default AboutPage;
