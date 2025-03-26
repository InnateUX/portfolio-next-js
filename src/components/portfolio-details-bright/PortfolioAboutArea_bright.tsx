
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Bright MLS is a real estate platform with over 100,000 subscribers",
  description: "As the Lead UX Designer for BrightMLS, the industry’s premier Multiple Listing Service supporting over 100,000 subscribers across nine states, I deliver comprehensive UX/UI expertise to empower real estate professionals within our extensive network. My role involves consulting, crafting UX strategies, designing user-centered experiences, and executing rapid prototyping. I lead user testing and research initiatives for cross-functional teams, including Marketing, Salesforce, Matrix, Listing Management, and Production Support.",
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
                  <span>BrightMLS</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role in project</h4>
                  <span>Lead UX/UI Designer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Services</h4>
                  <span>Discovery</span>
                  <span>Branding</span>
                  <span>Project Management</span>
                  <span>UI Design</span>
                  <span>Prototyping</span>
                  <span>User Testing</span>
                  <span>Manage Dev Team</span>
                  <span>Go to Market</span>
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
                  <a className="tp-btn-border-md" href="https://brightmls.com/" target="_blank">
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