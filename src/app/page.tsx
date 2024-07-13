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
          <div className="txt_con">
            <h3>onyejekwe ugonna </h3>

            <p className="job_tag"> web developer / business strategist</p>
            <p className="txt">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                culpa exercitationem voluptates ipsum nesciunt! Laboriosam
                vitae, repudiandae iusto corrupti illum distinctio accusamus
                quaerat corporis
              </span>

              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non
              </span>
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
