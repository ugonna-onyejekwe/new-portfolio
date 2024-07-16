import { NavBar } from "@/components/navbar";
import Link from "next/link";
import "./style.scss";

export default function contact() {
  return (
    <div className="section_wrapper2">
      <NavBar routeLink="/" routeName="home" dark={true} />

      <div className="contact_section">
        <div className="container">
          <h1>hello.</h1>
          <p>
            Need a beautiful, well-structured website that you can own and
            maintain yourself? Get in touch.
          </p>

          <ul>
            <li>
              Email:{" "}
              <Link href={"mailto:onyejekweugonna01@gmail.com"}>
                onyejekweugonna01@gmail.com
              </Link>
            </li>
            <li>
              Socails:{" "}
              <Link
                href="https://www.linkedin.com/in/ugonna-onyejekwe/"
                target="_blank"
              >
                Linkedin
              </Link>{" "}
              /{" "}
              <Link
                href={"https://github.com/ugonna-onyejekwe"}
                target="_blank"
              >
                Github
              </Link>{" "}
              /{" "}
              <Link href={"https://wa.me/08101330834"} target="_blank">
                whatApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
