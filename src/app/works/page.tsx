"use client";

import { NavBar } from "@/components/navbar";
import "./style.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  pageOverLayOpener,
  txtConAnim,
  txtAnim,
  NavAnim,
} from "../../animation-components/global";

export default function Works() {
  return (
    <div className="section_wrapper2">
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

      <NavBar routeLink="/" routeName="home" dark={true} />

      <div className="works_container">
        <div className="container">
          <motion.div
            className="txt"
            variants={txtConAnim}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <motion.h5 variants={txtAnim}>works</motion.h5>
            <motion.p variants={txtAnim}>
              This is a showcase of my best work in a variety of fields
              including Graphic and Web Design, No-Code Development, Product
              Design and Product Management
            </motion.p>

            <motion.p variants={txtAnim}>
              The world of digital design and development is constantly evolving
              and so has my role over the last 15 years. I’m still learning and
              gaining new skills every day.
            </motion.p>
          </motion.div>

          <motion.div
            className="works_wrapper"
            variants={NavAnim}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <Link href="/activelearn">
              <p>activelearn</p>
              <span>- frontend developer</span>
            </Link>
            <Link href="/novacart">
              <p>novacart</p>
              <span>- frontend developer</span>
            </Link>
            <Link href="/moviehub">
              <p>moviehub</p>
              <span>- frontend developer</span>
            </Link>

            <Link href="/splendior">
              <p>splendior</p>
              <span>- frontend developer</span>
            </Link>
            <Link href="/linkedin">
              <p>in clone</p>
              <span>- frontend developer</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
