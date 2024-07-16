"use client";

import { NavBar } from "@/components/navbar";
import "./page.scss";
import Link from "next/link";
// import Translate1 from "@/animation-components/translate";

export default function Home() {
  return (
    <div className="section_wrapper">
      <NavBar />

      <div className="home_section">
        <div className="container">
          <div className="txt_con">
            {/* <Translate1> */}
            <h3>onyejekwe ugonna </h3>
            {/* </Translate1> */}

            {/* <Translate1> */}
            <p className="job_tag"> a frontend developer / a debugger</p>
            {/* </Translate1> */}

            {/* <Translate1> */}
            <p className="txt">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia expedita dicta voluptatibus dignissimos culpa veritatis,
                reprehenderit provident consequatur nemo excepturi nostrum.
                Ullam ducimus facere illum quia? Aperiam inventore quaerat id.
              </span>

              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non
              </span>
            </p>
            {/* </Translate1> */}
          </div>

          <div className="navigators">
            <Link href={"/works"}>works</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/blogs"}>blogs</Link>
            <Link href={"/contact"}>contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//
