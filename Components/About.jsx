import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-md-center">
              <img
                src="assets/images/about_img2.png"
                alt=""
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                className="animation"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res-md-mt-30 res-sm-mt-20">
            <br />
            <div className="title_default_light text-center text-md-center title_border">
              <h4
                className="animation "
                data-animation-delay="0.2s"
                data-animation="fadeInUp"
              >
                TOKEN UTILITY
              </h4>
              </div>
              <div className="title_default_light">
              <p><strong>Staking Rewards: </strong>Holders can stake AI tokens
                  to earn rewards in the form of additional AI tokens and
                  participate in network governance.</p>
                  <p><strong>Governance: </strong>Token holders will have the
                  ability to participate in decision-making processes related to
                  upgrades, proposals, and other protocol changes</p>
                  <p><strong>Platform Access: </strong>AI tokens can grant access
                  to AI-based services and features within the Abri ecosystem.</p>

              </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
