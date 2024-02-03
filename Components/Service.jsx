import React from "react";

const Service = () => {
  const services = [
    {
      title: "AI Fusion",
      description: "Abri merges AI’s smart learning with blockchain’s secure tech, creating a world of personalized predictions and solid trust."
    },
    {
      title: "Abri Blockchain",
      description: "In the future, we’re building our own blockchain. It’s like a super strong foundation that lets developers and businesses build big things, changing how the world works in awesome ways."
    },
    {
      title: "NFT Integration",
      description: "Explore the potential of integrating non-fungible tokens (NFTs) within the Abri ecosystem, offering unique digital assets and opportunities for creators."
    },
    {
      title: "Decentralized Finance (DeFi) Potential",
      description: "Abri envisions contributing to the DeFi space, enabling users to access decentralized financial services that are secure, efficient, and accessible."
    },
    {
      title: "Interoperability",
      description: "Abri’s commitment to interoperability, allowing seamless interaction with other blockchains and ecosystems to foster collaboration and innovation."
    }, 
    {
      title: "AI-Powered Analytics",
      description: "Potential for AI-powered analytics within the Abri ecosystem, offering insights that can reshape decision-making processes for businesses and individuals."
    }
  ];
  return (
    <section id="services" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Meet our solution for you
              </h4>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              The story of Abri began back in 2017, when we started crafting the idea at the crossroads of AI and blockchain. Fast forward to 2023, and we’re on the brink of something big – our upcoming ICO. This marks a major step in our journey, showing our commitment to uniting two powerful technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i)=>(
              <div key={i+1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay={`0.${i+1}s`}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Service;
