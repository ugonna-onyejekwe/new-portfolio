// "use client";
// import { motion, useAnimation, stagger } from "framer-motion";
// import { useEffect } from "react";

// export default function Translate1({ children }: { children: any }) {
//   const mainControler = useAnimation();
//   useEffect(() => {
//     mainControler.start({ y: 0, opacity: 1 });
//   }, []);

//   return (
//     <motion.div
//       variants={{
//         hidden: {
//           opacity: 0,
//           y: 10,
//         },

//         visible: {
//           opacity: 1,
//           y: 0,
//         },
//       }}
//       initial="hidden"
//       animate={mainControler}
//       transition={{ duration: 0.5, delay: 0.35 }}
//       // stagger={0.5}
//     >
//       {children}
//     </motion.div>
//   );
// }
