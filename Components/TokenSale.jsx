import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = () => {
  return (
    <section
      id="token"
      className="section-token token-sale bg-light-dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                We are thrilled to announce the commencement of Abri's Phase 1 ICO, marking a significant milestone in our mission to redefine the intersection of artificial intelligence and blockchain technology. As of [01-02-2024], early contributors can seize the opportunity to be part of a groundbreaking project set to reshape the future of cryptocurrency. Abri's Phase 1 ICO offers a unique chance to secure Abri tokens at an exclusive rate of 0.00000333 BNB per AI token, with a generous 20% bonus for all contributions during this initial phase. Join us on this transformative journey, where innovation meets investment, and together, let's propel Abri into a new era of intelligent finance.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Starting time:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                January 1,2024 (12:00 Am)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Ending time:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                December 31,2024 (12:00 Am)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Exchange Rate
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                1 BNB = 300000 ABRI
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="token sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="animation tk_countdown text-center token_countdown_bg"
                data-animation="fadeInUp"
                data-animation-delay="0.1s"
              >

                <div className="tk_counter_inner">
                  <div
                    className="progress animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    <div
                      className="progress-bar progress-bar-striped gradient"
                      role="progressbar"
                      aria-valuenow={"80"}
                      aria-valuemin={"0"}
                      aria-valuemax={"100"}
                      style={{
                        width: 80,
                      }}
                    >
                      30%
                    </div>

                    <span className="progress_label bg-white inline_style_1">
                      <strong>
                        
                        ABRI
                      </strong>
                    </span>
                    <span className="progress_label bg-white inline_style_2">
                      <strong>
                        
                        ABRI
                      </strong>
                    </span>
                    <span className="progress_min_val">Sale Raised</span>
                    <span className="progress_max_val">Soft Caps</span>
                  </div>

                  <a
                    href=""
                    className="btn btn-default btn-radius animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.1s"
                  >
                    Buy Tokens <BsArrowRight />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Low - High 24 h:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $100 - $1000
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Total Tokens Sale
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                 ABRI 40%
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Acceptable Currency:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                BNB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TokenSale;
