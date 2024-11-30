import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the Gallery Page</h1>
    </motion.div>
  );
};

export default GalleryPage;
