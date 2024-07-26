"use client";

import { NavBar } from "@/components/navbar";
import "./style.scss";
import Image from "next/image";
import portfolio_image from "../../assets/profile_image.jpeg";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { pageOverLayOpener, txtConAnim } from "@/animation-components/global";
import { ImageAnim } from "@/animation-components/aboutAnim";

export default function About() {
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

      <NavBar routeLink="/" routeName="home" dark={false} />

      <div className="about_container">
        <div className="container">
          <div className="wrapper">
            <section className="info_section">
              <div className="img_con">
                <ImageAnim>
                  <Image src={portfolio_image} alt="image" />
                </ImageAnim>
              </div>

              <motion.div
                variants={txtConAnim}
                initial="hidden"
                animate="visible"
                className="txt_con"
              >
                <motion.h1>i&apos;m ugonna</motion.h1>
                <motion.h4>
                  A web developer who combines some line of code and some
                  creative insight to deliver a wonderful web interface.
                </motion.h4>

                <motion.div className="txt">
                  <p>
                    Witnessing a website come alive from code ignited a passion
                    for web development that burns brightly in me today. With
                    years of constant learning, practicing, and debugging I have
                    sharpened my skills. Web development isn't just a career to
                    me; it is a constant challenge that helps me cultivate on my
                    critical thinking, creativity, and problem-solving
                    abilities.
                  </p>
                  <p>
                    Currently working at Oge Enterprise, I collaborate with
                    backend devs and designers to craft amazing websites with
                    flawless user experiences.
                  </p>
                </motion.div>

                <motion.div className="socails">
                  <Link
                    href="https://github.com/ugonna-onyejekwe"
                    target="_blank"
                  >
                    <FiGithub />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/ugonna-onyejekwe/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>

                  <Link href="https://wa.me/08101330834" target="_blank">
                    <FaWhatsapp />
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            <section className="experience_section">
              <h2>experience</h2>

              <div className="box_con">
                <div className="box">
                  <div className="date_con">
                    <h6>2023 - present</h6>
                  </div>
                  <div>
                    <h3>
                      oge enterprise -{" "}
                      <span>frontend developer / mern stack developer</span>
                    </h3>

                    <p>
                      At Oge Enterprise, I wear multiple hats as a full-stack
                      developer. My frontend expertise with ReactJS, Next.js,
                      and Sass allows me to create dynamic and responsive
                      websites. Additionally, I leverage state management tools
                      like Redux and Redux Toolkit to ensure efficient data
                      handling and a smooth user experience. When needed, I can
                      switch gears and utilize backend tools like Express,
                      MongoDB, and Node.js to develop full-stack applications,
                      ensuring a seamless integration between front-end and
                      back-end functionalities.
                    </p>

                    <div className="skills_con">
                      <span>Reactjs</span> <small>/</small>
                      <span>scss</span> <small>/</small>
                      <span>nextjs</span> <small>/</small>
                      <span>expressjs</span> <small>/</small>
                      <span>nodejs</span> <small>/</small>
                      <span>mongoDb</span> <small>/</small>
                      <span>redux</span>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <div className="date_con">
                    <h6>2022 - 2023</h6>
                  </div>
                  <div>
                    <h3>
                      best tech limited - <span>frontend developer</span>
                    </h3>

                    <p>
                      I honed my skills as a frontend developer at Best Tech
                      Limited, working with HTML, CSS, and JavaScript to bring
                      user interfaces to life. In this collaborative role, I
                      interacted closely with backend developers and designers
                      to ensure a seamless user experience across projects.
                    </p>

                    <div className="skills_con">
                      <span>html</span> <small>/</small>
                      <span>css</span> <small>/</small>
                      <span>javascript</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="skill_section">
              <h2>skills</h2>
              <div className="skills">
                <span>Html</span> <small>/</small>
                <span>Css</span> <small>/</small>
                <span>Sass</span> <small>/</small>
                <span>Modern JavaScript(ES6+)</span> <small>/</small>
                <span>reactjs</span> <small>/</small>
                <span>Nextjs</span> <small>/</small>
                <span>TypeScript</span> <small>/</small>
                <span> State management(Redux/Redux-tool-kits)</span>
                <small>/</small>
                <span>Expressjs</span> <small>/</small>
                <span>Nodejs</span> <small>/</small>
                <span>Github</span> <small>/</small>
                <span>Axios</span> <small>/</small>
                <span>Version control</span>
              </div>

              <button className="cv_btn">my cv</button>
            </section>

            <section className="achievement_section">
              <h2>achievements</h2>
              <div className="wrapper">
                <div className="box">
                  <Link
                    href={
                      "https://www.freecodecamp.org/certification/OnyejekweUgonna/responsive-web-design"
                    }
                    target="_blank"
                  >
                    responsive web design certificate - freeCodeCamp
                    <span>
                      <RiExternalLinkLine />
                    </span>
                  </Link>

                  <ul>
                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      <p>
                        <b>Responsive Design Master:</b> Build websites that
                        flawlessly adapt to any screen size (desktop, mobile,
                        tablet) using media queries, flexbox, and CSS Grid.
                      </p>
                    </li>

                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      <p>
                        <b>Web Development Fundamentals:</b> Gain a solid
                        foundation in HTML, CSS, and JavaScript, the essential
                        building blocks for crafting well-structured, visually
                        appealing, and interactive websites.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="box">
                  <Link
                    href={
                      "https://www.freecodecamp.org/certification/OnyejekweUgonna/javascript-algorithms-and-data-structures-v8"
                    }
                    target="_blank"
                  >
                    javaScript algorithms and data structures(BETA) certificate
                    - freeCodeCamp
                    <span>
                      <RiExternalLinkLine />
                    </span>
                  </Link>

                  <ul>
                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      <p>
                        <b> Algorithm Ninja:</b> Mastered algorithmic
                        problem-solving to efficiently tackle complex coding
                        challenges.
                      </p>
                    </li>

                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      <p>
                        <b> Data Structure Guru:</b> Gained expertise in core
                        data structures (arrays, linked lists, etc.) to optimize
                        code performance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
