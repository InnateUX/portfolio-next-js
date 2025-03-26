
import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import HeroPortfolioDetailsArea from './HeroPortfolioDetailsArea_bright';
import PortfolioAboutArea from './PortfolioAboutArea_bright';
import PortfolioDetailsArea from './PortfolioDetailsArea_bright';
import FooterOne from '@/layouts/footers/FooterOne';


const PortfolioDetails = () => {
  return (
    <>
      <HeaderFour style={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroPortfolioDetailsArea style={true} />
            <PortfolioAboutArea />
            <PortfolioDetailsArea />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;