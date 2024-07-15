import Link from "next/link";
import "./style.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const NavBar = ({
  routeName,
  routeLink,
  dark,
}: {
  routeName?: string;
  routeLink?: string;
  dark?: boolean;
}) => {
  return (
    <nav className={dark === true ? "dark" : ""}>
      <div className="wrapper">
        <p>&copy; / 2024</p>

        <div className="route_con">
          {routeName ? (
            <div className="route">
              <Link href={`/${routeLink}`}>{routeName}</Link>
            </div>
          ) : (
            <div className="socail_links">
              <Link
                href={"https://github.com/ugonna-onyejekwe"}
                target="_blank"
              >
                <FiGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ugonna-onyejekwe/"}
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
