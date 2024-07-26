"use client";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import "./style.scss";
import { motion } from "framer-motion";

import {
  pageOverLayOpener,
  txtAnim,
  txtConAnim,
} from "../../animation-components/global";

export default function contact() {
  return (
    <div className="section_wrapper2">
      {/* page  overlay*/}
      <motion.div
        style={{
          background: "white",
        }}
        className="page_overlay"
        variants={pageOverLayOpener}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      {/* page overlay */}

      <NavBar routeLink="/" routeName="home" dark={true} />

      <div className="contact_section">
        <motion.div
          className="container"
          variants={txtConAnim}
          initial="hidden"
          animate="visible"
          exit={"exit"}
        >
          <motion.h1 variants={txtAnim}>hello.</motion.h1>
          <motion.p variants={txtAnim}>
            Need a beautiful, well-structured website that you can own and
            maintain yourself? Get in touch.
          </motion.p>

          <ul>
            <motion.li variants={txtAnim}>
              Email:{" "}
              <Link href={"mailto:onyejekweugonna01@gmail.com"}>
                onyejekweugonna01@gmail.com
              </Link>
            </motion.li>
            <motion.li variants={txtAnim}>
              Socails:{" "}
              <Link
                href="https://www.linkedin.com/in/ugonna-onyejekwe/"
                target="_blank"
              >
                Linkedin
              </Link>{" "}
              /{" "}
              <Link
                href={"https://github.com/ugonna-onyejekwe"}
                target="_blank"
              >
                Github
              </Link>{" "}
              /{" "}
              <Link href={"https://wa.me/08101330834"} target="_blank">
                whatApp
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
