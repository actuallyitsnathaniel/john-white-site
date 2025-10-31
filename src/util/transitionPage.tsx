import { motion } from "motion/react";
import { ComponentType } from "react";

const pageTransition = (OgComponent: ComponentType) => {
  const TransitionWrapper = () => (
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

  TransitionWrapper.displayName = `pageTransition(${OgComponent.displayName || OgComponent.name || 'Component'})`;

  return TransitionWrapper;
};
export default pageTransition;
