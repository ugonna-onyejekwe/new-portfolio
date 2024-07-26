"use client";
import { NavBar } from "@/components/navbar";
import "./page.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  pageOverLayOpener,
  txtAnim,
  NavAnim,
  txtConAnim,
} from "../animation-components/global";

export default function Home() {
  return (
    <div className="section_wrapper">
      {/* page  overlay*/}
      <motion.div
        style={{
          background: "black",
        }}
        className="page_overlay"
        variants={pageOverLayOpener}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      {/* page overlay */}

      <NavBar />

      <div className="home_section">
        <div className="container">
          <motion.div
            className="txt_con"
            variants={txtConAnim}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <motion.h3 variants={txtAnim}>onyejekwe ugonna </motion.h3>

            <motion.p variants={txtAnim} className="job_tag">
              {" "}
              a frontend developer / a debugger
            </motion.p>

            <motion.p variants={txtAnim} className="txt">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia expedita dicta voluptatibus dignissimos culpa veritatis,
                reprehenderit provident consequatur nemo excepturi nostrum.
                Ullam ducimus facere illum quia? Aperiam inventore quaerat id.
              </span>

              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            variants={NavAnim}
            initial="hidden"
            animate="visible"
            exit={"exit"}
            className="navigators"
          >
            <Link href={"/works"}>works</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/blogs"}>blogs</Link>
            <Link href={"/contact"}>contact</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

//
