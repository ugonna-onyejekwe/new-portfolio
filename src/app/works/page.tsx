import { NavBar } from "@/components/navbar";
import "./style.scss";
import Link from "next/link";

export default function works() {
  return (
    <div className="section_wrapper2">
      <NavBar routeLink="/" routeName="home" dark={true} />

      <div className="works_container">
        <div className="container">
          <div className="txt">
            <h5>works</h5>
            <p>
              This is a showcase of my best work in a variety of fields
              including Graphic and Web Design, No-Code Development, Product
              Design and Product Management
            </p>

            <p>
              The world of digital design and development is constantly evolving
              and so has my role over the last 15 years. I’m still learning and
              gaining new skills every day.
            </p>
          </div>

          <div className="works_wrapper">
            <Link href={"/kaluxia"}>
              <p>kaluxia</p>
              <span>- full stack developer</span>{" "}
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
