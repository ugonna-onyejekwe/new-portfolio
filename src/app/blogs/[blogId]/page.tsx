"use client";
import { blogs } from "@/components/data";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import "./style.scss";
import { FaHandHoldingHeart, FaLink, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Blog() {
  const { blogId } = useParams();

  return (
    <>
      <NavBar routeLink="blogs" routeName="blogs" />

      <div className="blog_container">
        {blogs.map((i, key) => {
          if (i.id.toString() === blogId)
            return (
              <div className="container" key={key}>
                <div className="title">
                  <h3>{i.title}</h3>
                </div>
                <div className="img_con">
                  <Image src={i.image} alt="image" />
                </div>

                <div
                  className="txt_con"
                  dangerouslySetInnerHTML={{ __html: i.desc }}
                ></div>

                <div className="share_section">
                  <p>
                    <span>
                      <FaHandHoldingHeart />
                    </span>{" "}
                    Enjoy this post? feel free to share!
                  </p>

                  <div className="socails">
                    <span>
                      <FaLink />
                    </span>

                    <span>
                      <FaLinkedinIn />
                    </span>

                    <span>
                      <FaXTwitter />
                    </span>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
}
