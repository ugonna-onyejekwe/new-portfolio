import { NavBar } from "@/components/navbar";
import "./style.scss";
import Image from "next/image";
import portfolio_image from "../../assets/profile_image.jpeg";
import { PiDotOutline } from "react-icons/pi";

export default function About() {
  return (
    <div className="section_wrapper">
      <NavBar routeLink="/" routeName="home" dark={false} />

      <div className="about_container">
        <div className="container">
          <div className="img_con">
            <Image src={portfolio_image} alt="portfolio image" />
          </div>
          {/* bTtfglrBcrjnsu6I */}
          <div className="wrapper">
            <h1>about</h1>
            <h3>
              I am ugonna.
              <br /> A web developer, business strategist and problem solver.
            </h3>

            <div className="txt_con">
              <p>
                Becoming a microbiologist has always been a goal of mine after I
                finished secondary school. Becoming a microbiologist fascinate
                me because I love exploring and loves to know more about
                microorganisms. What motivated this goal of mine is that I have
                always wondered how the things we don't see(microorganisms), are
                things that have the biggest impact in our life. So I decided to
                know more by studying microbiology in University of Nigeria
                nsukka. Lucky enough I was admitted.
              </p>
              <p>
                But a day came when I witnessed website taking shape from lines
                of code. How interesting. I never understand how wonderful the
                Internet is and how marvellous a programmer could be, bring
                ideas to life by writing codes, until that point in time.
              </p>
              <p>
                Ever since then. Becoming a web developer became a burning
                desire in me.
              </p>
              <p>
                However, still studying microbiology in school and having fallen
                in love with web development. I was left with no option than to
                practice polygamy. Lol.
              </p>
              <p>
                Studying these two courses has gone a long way for me in life.
                At this point I understood the lovely quote of Jim Rohn when he
                said: <b>"no knowledge is a waste"</b>.
              </p>
              <p>
                Years past, through my constant learning and practice. I learnt
                how to create websites and bring my own ideas to life through
                write some lines of code and I landed my first job at Oge
                Enterprise. Where my supervisor always referred to my work as
                <b>"perfect"</b>. At that point I realised that am now a true
                web developer.
              </p>
              <p>
                Being a web developer has not only landed me a job, but it has
                help me to become a critical thinker and a creative one for that
                matter. Running multiple times into bugs has help me elevate
                these two skills of mine and made me a pro problem-solver.
              </p>
              <p>
                How amazing can having a bug in your code could be. But its very
                stressful and annoying.
              </p>
              <p>
                Aside being a web developer, I have a goal of becoming an
                entrepreneur(business strategist). I want to have a company that
                is of high value to the world. Crazy right?
              </p>
              <p>
                Yeah it's crazy. But Tony robbins said it well, when he said:
              </p>
              <h4>
                "That to become a great achievers you have to be a crazy person.
                Taking decisions that people are afraid to take."
              </h4>
              <p>
                The value that this company will provide is still yet to be
                answered. Jim Rohn will say:
                <b>
                  "Not every answer comes at once, u will figure it out along
                  the way while you move on".
                </b>
                Crazy again right? Lol.
              </p>
              <p>
                One of my favourite quote in life is that of seneca the great
                stoic. When he said:
              </p>
              <h4>
                "the greatest education one could give to him self, is that of
                self education."
              </h4>

              <p>
                This was one of the reason why I became a voracious reader. I
                mostly enjoy reading philosophical and psychological book as the
                help improve my life.
              </p>

              <p>
                Reading books has help me unlock a world of new ideas. Being
                able to see what others don't see. What keeps me motivated most
                of the times is reading. At this point I will suggest that
                reading should be a part of one's life
              </p>

              <p>
                Lastly, I will say this is the end of the wonderful story of my
                life. Don't hesitate to contact me if you think I might be of
                help.
                <b>
                  Don't forget that, my web development skills are still top
                  notch.
                </b>
                Thanks for reading.
              </p>
            </div>

            <section>
              <h2>experience</h2>
              <ul>
                <li>
                  <span>
                    <PiDotOutline />
                  </span>
                  Best Tech Limited - <b> Frontend Developer (Internship)</b>
                </li>
                <li>
                  <span>
                    <PiDotOutline />
                  </span>
                  Oge Enterprise - <b>Frontend Developer</b>
                </li>
              </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
}
