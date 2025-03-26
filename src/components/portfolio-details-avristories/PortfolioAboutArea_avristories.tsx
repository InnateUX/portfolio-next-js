
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "AVRI Stories: A Creative Solution for Connecting Loved Ones and Offsetting Dementia",
  description: "AVRI Stories is an innovative app designed to help individuals stay connected with their loved ones, even when physical distance or health challenges like dementia create separation. By allowing users to record themselves reading short stories, the app provides a way for family members to share meaningful moments, offering a sense of closeness and continuity. With a focus on supporting relationships in residential care facilities and across generations, AVRI Stories fosters emotional well-being and connection, ensuring that loved ones can engage with each other anytime, anywhere.",
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
                  <span>AvriStories</span>
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
                  <span>UI/UX Design</span>
                  <span>Prototyping</span>
                  <span>User Testing</span>
                  <span>App Development</span>
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
  <a className="tp-btn-border-md" href="https://apps.apple.com/us/app/avri-stories/id1536486792/" target="_blank" rel="noopener noreferrer">
    View App
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