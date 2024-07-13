import { blogs } from "@/components/data";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import "./styles.scss";
import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <NavBar routeLink="/" routeName="home" />

      <div className="blogs_container">
        <div className="container">
          {blogs.map((i) => {
            return (
              <div className="box">
                <div className="img_con">
                  <Image src={i.image} alt="image" />
                </div>

                <div className="txt_con">
                  <h3>
                    {i.title.length > 100
                      ? i.title.slice(0, 100) + "..."
                      : i.title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        i.desc.length > 250
                          ? i.desc.slice(0, 250) + "..."
                          : i.desc,
                    }}
                  ></p>

                  <Link href={`blogs/${i.id}`}>
                    <button>read more</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
