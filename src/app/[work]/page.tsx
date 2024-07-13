"use client";
import "./style.scss";
import { useParams } from "next/navigation";
import { data } from "../../components/data/index";
import { NavBar } from "@/components/navbar";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Work() {
  const { work } = useParams();

  return (
    <>
      <NavBar routeLink="works" routeName="works" dark={false} />

      {data.map((i) => {
        console.log(i.name, work, i.name === work);
        return (
          i.name === work && (
            <>
              <div className="work_container">
                <div className="container">
                  <div className="heading">
                    <h1>{i.name}</h1>
                  </div>

                  <div className="container breif">
                    <h2>{i.breif}</h2>
                  </div>

                  <div className="box_wrapper container">
                    <div className="box">
                      <h5>role</h5>
                      <p>{i.role}</p>
                    </div>

                    <div className="box">
                      <h5>responsibilties</h5>
                      <p>{i.responsibilities}</p>
                    </div>

                    <div className="box">
                      <h5>url</h5>
                      <p>
                        <a href="#">{`https://${i.name}.com`}</a>
                      </p>
                    </div>

                    <div className="box">
                      <h5>tools</h5>
                      <span>{i.tools}</span>
                    </div>
                  </div>

                  <div className="desc_wrapper">
                    <div className="img_con">
                      <Image src={i.img1} alt="image" />
                    </div>
                    <div className="txt">
                      <p>{i.desc1}</p>
                    </div>

                    <div className="img_con">
                      <Image src={i.img2} alt="image" />
                    </div>
                    <div className="txt">
                      <p>{i.desc2}</p>
                    </div>

                    <div className="img_con">
                      <Image src={i.img3} alt="image" />
                    </div>
                    <div className="txt">
                      <p>{i.desc2}</p>
                    </div>
                  </div>

                  <div className="swiper_section">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 2000,
                      }}
                      speed={700}
                      spaceBetween={50}
                      slidesPerView={1}
                    >
                      {i.resp_imgs.map((i) => {
                        return (
                          <SwiperSlide className="swiper_box">
                            <div className="img">
                              <Image src={i} alt="image" />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  <div className="live_link_btn">
                    <h3>Check it out</h3>
                    <button>{`https://${i.name}.com`}</button>
                  </div>
                </div>
              </div>
            </>
          )
        );
      })}
    </>
  );
}
