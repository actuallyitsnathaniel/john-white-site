import { motion } from "framer-motion";

const pageTransition = (OgComponent: JSX.ElementType) => {
  return () => (
    <motion.div
      id="slide-in"
      initial={{ opacity: 0, translateX: 15 }}
      exit={{ opacity: 0, translateX: -15 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: 0.07 }}
      className="h-full flex justify-stretch flex-grow"
    >
      <OgComponent />
    </motion.div>
  );
};
export default pageTransition;
