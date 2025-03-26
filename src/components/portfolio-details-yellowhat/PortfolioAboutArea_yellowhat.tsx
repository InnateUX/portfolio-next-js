
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Revolutionizing Property Management: A Seamless Integration of AI-Driven Solutions",
  description: "Dependapro National is a platform developed by YellowHat that leverages AI technology to streamline property management tasks. It provides a seamless solution for property managers to efficiently handle maintenance requests, service provider management, and tenant communications. By automating these processes, Dependapro National improves operational efficiency, reduces manual work, and enhances the overall user experience for both property managers and tenants.",
  description2: "",
}

const { subtitle, title, description, description2 } = portfolio_content

const PortfolioAboutArea = () => {
  return (
    <>
      <div id="porfolio-details" className="porfolio-details__info-wrap black-bg-3 pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4">
              <div className="porfolio-details__left-info">
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Company</h4>
                  <span>YellowHat</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role in project</h4>
                  <span>UX/UI Designer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Services</h4>
                  <span>Lo-fi Wireframes</span>
                  <span>Hi-fi Wireframes</span>
                  <span>Prototyping</span>
                  <span>UI Design</span>
                 
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2023</span>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="porfolio-details__right-info">
                <div className="porfolio-details__right-title-box">
                  <span className="tp-section-subtitle-4 mb-20">{subtitle}</span>
                  <h4 className="tp-section-title-4 mb-35">{title}</h4>
                  <p>{description}</p>
                </div>
                <div className="col-xl-7 col-lg-8">
                  <p>{description2}</p>
                </div>
                <p > </p>
                <div className="porfolio-details__right-btn">
  <a className="tp-btn-border-md" href="https://yellowhat.ai/" target="_blank" rel="noopener noreferrer">
    View Website
    <span>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 1H10V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </a>
</div>
          
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PortfolioAboutArea;