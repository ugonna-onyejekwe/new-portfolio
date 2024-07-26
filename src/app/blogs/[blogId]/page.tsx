"use client";
import { blogs } from "@/components/data";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import "./style.scss";
import { FaHandHoldingHeart, FaLink, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  pageOverLayOpener,
  txtAnim,
  txtConAnim,
} from "@/animation-components/global";

export default function Blog() {
  const { blogId } = useParams();

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

      <NavBar routeLink="blogs" routeName="blogs" />

      <motion.div
        className="blog_container"
        variants={txtConAnim}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        {blogs.map((i, key) => {
          if (i.id.toString() === blogId)
            return (
              <div className="container" key={key}>
                <div className="title">
                  <motion.h3 variants={txtAnim}>{i.title}</motion.h3>
                </div>
                <motion.div variants={txtAnim} className="img_con">
                  <Image src={i.image} alt="image" />
                </motion.div>

                <motion.div
                  variants={txtAnim}
                  className="txt_con"
                  dangerouslySetInnerHTML={{ __html: i.desc }}
                ></motion.div>

                <div className="share_section">
                  <p>
                    <span>
                      <FaHandHoldingHeart />
                    </span>{" "}
                    Enjoy this post? feel free to share!
                  </p>

                  <div className="socails">
                    <span
                      onClick={() => {
                        const currentUrl = window.location.href;
                        navigator.clipboard.writeText(currentUrl);
                      }}
                    >
                      <FaLink />
                    </span>

                    <span
                      onClick={() => {
                        const currentUrl = window.location.href;
                        window.open(
                          `http://twitter.com/intent/tweet?url=${encodeURIComponent(
                            currentUrl
                          )}&hashtags=${i.hashTag1},${i.hashTag2},${
                            i.hashTag3
                          }`,
                          "_blank"
                        );
                      }}
                    >
                      <FaXTwitter />
                    </span>

                    <span
                      onClick={() => {
                        const currentUrl = window.location.href;
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                            currentUrl
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div>
              </div>
            );
        })}
      </motion.div>
    </>
  );
}
