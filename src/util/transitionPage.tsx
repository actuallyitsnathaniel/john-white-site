import { motion } from "motion/react";

const pageTransition = (OgComponent: JSX.ElementType) => {
  return () => (
    <motion.div
      id="slide-in"
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.2, delay: 0.07 }}
      className="h-full flex justify-stretch grow"
    >
      <OgComponent />
    </motion.div>
  );
};
export default pageTransition;
