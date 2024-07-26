"use client";
import { blogs } from "@/components/data";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import "./styles.scss";
import Link from "next/link";
import { AnimateX } from "@/animation-components/animateY";
import { motion } from "framer-motion";
import { pageOverLayOpener } from "@/animation-components/global";

export default function Blogs() {
  return (
    <>
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

      <NavBar routeLink="/" routeName="home" />

      <div className="blogs_container">
        <div className="container">
          {blogs.map((i, key) => {
            return (
              <AnimateX key={key}>
                <div className="box" key={key}>
                  <div className="img_con">
                    <Image src={i.image} alt="image" />
                  </div>

                  <div className="txt_con">
                    <h3>
                      {i.title.length > 100
                        ? i.title.slice(0, 100) + "..."
                        : i.title}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          i.desc.length > 250
                            ? i.desc.slice(0, 250) + "..."
                            : i.desc,
                      }}
                    ></p>

                    <Link href={`blogs/${i.id}`}>
                      <button>read more</button>
                    </Link>
                  </div>
                </div>
              </AnimateX>
            );
          })}
        </div>
      </div>
    </>
  );
}
