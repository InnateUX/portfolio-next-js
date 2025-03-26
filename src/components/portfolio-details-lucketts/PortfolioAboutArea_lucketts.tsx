import React from 'react';

const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Transforming The Old Lucketts Store’s Online Presence",
  description: "For The Old Lucketts Store, a beloved destination for unique home décor and antiques, I reimagined their digital presence with a design that blends timeless charm with modern functionality. The new website captures the essence of the store’s rich history while providing a seamless, intuitive user experience for visitors. Through strategic design choices, I focused on enhancing the store’s e-commerce platform, optimizing the layout for easy browsing, and creating a visually engaging site that mirrors the rustic and eclectic spirit of The Old Lucketts Store. The result is a website that reflects the brand’s identity and offers a user-friendly experience for customers, both new and returning.",
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
                  <span>The Old Luckett's Store</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role in project</h4>
                  <span>Lead UX/UI Designer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Services</h4>
                  <span>Branding</span>
                  <span>Project Management</span>
                  <span>Shopify</span>
                  <span>E-Commerce</span>
                  <span>Web Design</span>
                  <span>Marketing</span>
                
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2023-2025</span>
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
                {/* Aligning description2 with the same layout and width as description */}
                <div className="porfolio-details__right-description">
                  <p>{description2}</p>
                </div>
                
                {/* Wrap the buttons in a container with flexbox to display side by side */}
                <div className="porfolio-details__right-btn-container" style={{ display: 'flex', gap: '15px' }}>
  <div className="porfolio-details__right-btn">
    <a className="tp-btn-border-md" href="https://luckettsmarkets.com/" target="_blank" rel="noopener noreferrer">
      Luckett's Markets
      <span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 1H10V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  </div>
  <div className="porfolio-details__right-btn">
    <a className="tp-btn-border-md" href="https://luckettstore.com/" target="_blank" rel="noopener noreferrer">
      Luckett's Store
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
      </div>
    </>
  );
};

export default PortfolioAboutArea;