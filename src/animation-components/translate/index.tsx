"use client";

import { motion } from "framer-motion";

export default function Translate({ children }: { children: any }) {
  const anim = (varients: any) => {
    return {
      initial: "initial",
      animate: "enter",
      //   exit: "exit",
      varients,
    };
  };

  const translate = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: 0,
      transition: {
        duration: 1,
        // ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      top: "100vh",
    },
  };

  return <motion.div {...anim(translate)}>{children}</motion.div>;
  //   return (
  //     <div>
  //       <div>{children}</div>
  //     </div>
  //   );
}
