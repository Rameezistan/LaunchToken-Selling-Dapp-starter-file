import React from "react";
import { IoLogoApple } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";

const HowtoJoin = () => {
  return (
    <section
      id="mobileapp"
      className="bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="title_default_light title_border text_md_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                How to Join the Abri Presale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                The Abri presale is your chance to secure $AI before the token launch. You can buy with crypto or bank card, plus you can stake your tokens to earn rewards during the presale.
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Once the presale is concluded, you’ll be able to claim your tokens, either on the claim date or 7 days later if your tokens are staked.
              </p>
            </div>

            <div
              className="btn_group text_md_center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              <a href="#" className="btn btn-default btn-radius">
                Buy Now
              </a>
            </div>
          </div>

          <div className="row col-lg-6">
              <div k className="col-lg-6 col-md-6 col-sm-12">
                <div className="box_wrap animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <h4>Buy With Crypto</h4>
                <p>Buy Abri tokens with BNB. Make sure you have enough BNB to cover gas.</p>
                </div>
              </div>
              <div k className="col-lg-6 col-md-6 col-sm-12">
                <div className="box_wrap animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <h4>Buy with card</h4>
                <p>Buy $ABRI tokens using your bank card. Check the buy flow for the fees.</p>
                </div>
              </div>
              <div k className="col-lg-6 col-md-6 col-sm-12">
                <div className="box_wrap animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <h4>Stake $ABRI</h4>
                <p>Stake your tokens either when you’re buying or on the staking dashboard. Earn rewards now!</p>
                </div>
              </div>
              <div k className="col-lg-6 col-md-6 col-sm-12">
                <div className="box_wrap animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <h4>Claim $ABRI</h4>
                <p>Claim your $ABRI tokens on claim day! This will happen once the presale has ended.</p>
                </div>
              </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HowtoJoin;
