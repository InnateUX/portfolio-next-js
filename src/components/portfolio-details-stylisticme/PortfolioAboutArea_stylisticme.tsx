
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Stylistic Me: Customizable Kids’ Clothing Delivered to Your Door",
  description: "Stylistic Me was born out of the need to simplify life for busy parents while keeping their kids stylish. Created by two moms, the subscription box service allows parents to customize a box of trendy, high-quality kids’ clothing and accessories from popular department store brands. With Stylistic Me, parents can stay on top of the latest kids’ fashion and eliminate the stress of deciding what their little ones will wear. Each delivery brings fresh, seasonally appropriate outfits that both parents and kids will love, making mornings easier and more stylish.",
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
                  <span>StylisticME</span>
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
                  <span>Shopify</span>
                  <span>Box Subscription</span>
                  <span>Marketing</span>
                  <span>Social Media</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2022</span>
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
               
          
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PortfolioAboutArea;