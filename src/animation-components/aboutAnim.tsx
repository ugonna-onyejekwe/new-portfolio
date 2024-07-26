import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const ImageAnim = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const animateImage = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  };

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={animateImage}
      initial="hidden"
      animate={mainControls}
    >
      {children}{" "}
    </motion.div>
  );
};
