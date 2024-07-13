"use client";

import { NavBar } from "@/components/navbar";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="section_wrapper">
      <NavBar />

      <div className="home_section">
        <div className="container">
          <div className="txt">
            <h5>onyejekwe ugonna </h5>

            <p className="job_tag"> web developer / business strategist</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              in facere dolorem voluptatibus veritatis est
            </p>
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
