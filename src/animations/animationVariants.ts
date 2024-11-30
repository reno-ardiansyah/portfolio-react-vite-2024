export const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};

export const pageTransition = {
  duration: 0.5,
  type: "spring",
};
