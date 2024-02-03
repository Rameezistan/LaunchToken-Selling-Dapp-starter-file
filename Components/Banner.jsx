import React from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = () => {
  return (
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div className="banner_effect"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="banner_text_s2 text_md_center">
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
              <strong>Abri  </strong> is an innovative fusion of cutting-edge <strong> AI technology</strong> and the transformative power of blockchain.

              </h1>
              <h5
                className="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Presale is <mark className="gradient_box">Live</mark>
              </h5>

              <div
                className="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="#whitepaper"
                  className="btn btn-default btn-radius nav-link content-popup"
                >
                  Whitepaper &nbsp;
                  <BsArrowRight />
                </a>
                <a href="#token" className="btn btn-border btn-radius">
                  {" "}
                  Buy Token Now! <BsArrowRight />
                  {/* <a className="btn btn-border btn-radius"> Transfer Token <BsArrowRight /> */}
                </a>
              </div>

              <div className="team_pop mfp-hide" id="whitepaper">
                <div className="row m-0">
                  <div className="col-md-7">
                    <div className="pt-3 pb-3">
                      <div className="title_dark title_border">
                        <h4>Download Whitepaper</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Doloribus voluptatem officiis soluta quis nisi
                          velit quos sint alias expedita amet consequuntur,
                          dolorum commodi inventore odio minima? Maxime minima
                          voluptatibus pariatur?
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Doloribus voluptatem officiis soluta quis nisi
                          velit quos sint alias expedita amet consequuntur,
                          dolorum commodi inventore odio minima? Maxime minima
                          voluptatibus pariatur?
                        </p>

                        <a href="#" className="btn btn-default btn-radius">
                          Download Now <AiOutlineCloudDownload />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <img
                      src="assets/images/whitepaper.png"
                      className="pt-3 pb-3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation="fadeInRight"
              data-animation-delay="1.5s"
            >
              <img
                src="assets/images/banner_img2.png"
                alt=""
                className="new_image_css"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
