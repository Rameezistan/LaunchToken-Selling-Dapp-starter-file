// FAQ.js

import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="title_default_light title_border text-center">
        <h4
          className="animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
        >
          Frequently Asked Questions
        </h4>
      </div>
      <div className="container">
        <div>
          <h5
            className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            <b>What is an ICO?</b>
          </h5>
          <div className="title_default_light title_border">
            <p
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              A: ICO stands for Initial Coin Offering. It is a fundraising
              method commonly used by blockchain and cryptocurrency projects to
              raise capital. In an ICO, tokens or coins are sold to investors in
              exchange for funding, typically in the form of popular
              cryptocurrencies like Bitcoin or Ethereum.
            </p>
          </div>
        </div>

        <div>
          <h5
            className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            <b>How can I participate in the token sale?</b>
          </h5>
          <div className="title_default_light title_border">
            <p
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              A: To participate in the token sale, you need to visit our
              official website and follow the registration process. During the
              ICO period, you can purchase tokens using supported
              cryptocurrencies or other specified payment methods.
            </p>
          </div>
        </div>

        <div>
          <h5
            className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            <b>What is a token?</b>
          </h5>
          <div className="title_default_light title_border">
            <p
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              A: In the context of ICOs, a token is a unit of value issued by a
              project. It can represent a stake in the project, access to a
              specific feature, or any other form of utility within the
              project's ecosystem.
            </p>
          </div>
        </div>

        <div>
          <h5
            className="animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            <b>How do I store the tokens I purchase during the ICO?</b>
          </h5>
          <div className="title_default_light title_border">
            <p
              className="animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              A: After participating in an ICO, you will need a compatible
              wallet to store your tokens. Make sure to use a wallet that
              supports the specific token standard (such as ERC-20 for
              Ethereum-based tokens). You can use hardware wallets, software
              wallets, or even certain exchange wallets depending on the
              project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
