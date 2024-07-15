import { NavBar } from "@/components/navbar";
import "./style.scss";
import Image from "next/image";
import portfolio_image from "../../assets/profile_image.jpeg";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";

export default function About() {
  return (
    <div className="section_wrapper">
      <NavBar routeLink="/" routeName="home" dark={false} />

      <div className="about_container">
        <div className="container">
          <div className="wrapper">
            <section className="info_section">
              <div className="img_con">
                <Image src={portfolio_image} alt="image" />
              </div>

              <div className="txt_con">
                <h1>i&apos;m ugonna</h1>
                <h4>
                  A programmer, a blogger, a web developer, a critical thinker
                  and a debugger
                </h4>

                <div className="txt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita, saepe illum. Earum voluptas esse sit error ipsum
                    officia reiciendis facere quidem obcaecati dolores, illo hic
                    autem placeat, unde excepturi blanditiis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita, saepe illum. Earum voluptas esse sit error ipsum
                    officia reiciendis facere quidem obcaecati dolores, illo hic
                    autem placeat, unde excepturi blanditiis.
                  </p>
                </div>

                <div className="socails">
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
                </div>
              </div>
            </section>

            <section className="experience_section">
              <h2>experience</h2>

              <div className="box_con">
                <div className="box">
                  <div>
                    <h6>2021 - present</h6>
                  </div>
                  <div>
                    <h3>
                      oge enterprise - <span>frontend developer</span>
                    </h3>

                    <p>
                      Build, style, and ship high-quality websites, design
                      systems, mobile apps, and digital experiences for a
                      diverse array of projects for clients including Harvard
                      Business School, Everytown for Gun Safety, Pratt
                      Institute, Koala Health, Vanderbilt University, The 19th
                      News, and more. Provide leadership within engineering
                      department through close collaboration, knowledge shares,
                      and spearheading the development of internal tools.
                    </p>

                    <div className="skills_con">
                      <span>html</span> <small>/</small>
                      <span>css</span> <small>/</small>
                      <span>javascript</span> <small>/</small>
                      <span>reactjs</span>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <div>
                    <h6>2021 - present</h6>
                  </div>
                  <div>
                    <h3>
                      best tech limited - <span>frontend developer</span>
                    </h3>

                    <p>
                      Build, style, and ship high-quality websites, design
                      systems, mobile apps, and digital experiences for a
                      diverse array of projects for clients including Harvard
                      Business School, Everytown for Gun Safety, Pratt
                      Institute, Koala Health, Vanderbilt University, The 19th
                      News, and more. Provide leadership within engineering
                      department through close collaboration, knowledge shares,
                      and spearheading the development of internal tools.
                    </p>

                    <div className="skills_con">
                      <span>html</span> <small>/</small>
                      <span>css</span> <small>/</small>
                      <span>javascript</span> <small>/</small>
                      <span>reactjs</span>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, ex dolorum quod optio veritatis, dicta{" "}
                    </li>

                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, ex dolorum quod optio veritatis, dicta{" "}
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
                    javaScript algorithms and data structures(BETA) -{" "}
                    freeCodeCamp
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, ex dolorum quod optio veritatis, dicta{" "}
                    </li>

                    <li>
                      {" "}
                      <span>
                        <RxDotFilled />
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, ex dolorum quod optio veritatis, dicta{" "}
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
