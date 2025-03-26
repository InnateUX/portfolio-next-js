
import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import HeroPortfolioDetailsArea from './HeroPortfolioDetailsArea_avristories';
import PortfolioAboutArea from './PortfolioAboutArea_avristories';
import PortfolioDetailsArea from './PortfolioDetailsArea_avristories';
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