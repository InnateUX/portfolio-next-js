import React from 'react';
import Image from 'next/image';

import Logo1 from "@/assets/img/logo/logo_white.png";
import Logo2 from "@/assets/img/logo/logo_dark.png";
import logo_white from "@/assets/img/logo/logo_white.png";
import Shape from "@/assets/img/offcanvas/bg-shape-2.png";
import MobileMenus from '@/layouts/headers/menu/mobile-menus';

const Offcanvas = ({ showCanvas, setShowCanvas, style_bg, style_bg2 }: any) => {
  return (
    <>
      <div className={`tp-offcanvas-area  ${showCanvas ? 'opened' : ''} ${style_bg ? 'tp-offcanvas-update-bg' : ''} ${style_bg2 ? 'tp-offcanvas-update-bg-2' : ''}`}>
        <div className="tp-offcanvas-bg is-left"></div>
        <div className="tp-offcanvas-bg is-right d-none d-md-block">
          <div className="tp-offcanvas-shape">
            <Image className="tp-offcanvas-shape-1" src={Shape} alt="image" />
          </div>
        </div>
        <div className="tp-offcanvas-wrapper-2">

          <div className="tp-offcanvas-left">
            <div className="tp-offcanvas-left-wrap d-flex justify-content-between align-items-center">
              <div className="tpoffcanvas__logo">
                {style_bg ?
                  <Image className="logo-white" style={{ height: 'auto' }} src={logo_white} alt="image" />
                  :
                  <>
                    <Image className="logo-white" style={{ height: 'auto' }} src={Logo1} alt="image" />
                    <Image className="logo-black" style={{ height: 'auto' }} src={Logo2} alt="image" />
                  </>
                }
              </div>
              <div className="tp-offcanvas-close d-md-none text-end">
                <button className="tp-offcanvas-close-btn" onClick={() => setShowCanvas(false)}>
                  <span className="text"><span>close</span></span>
                  <span className="d-inline-block">
                    <span>
                      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.80859 9.80762L28.1934 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.80859 28.1924L28.1934 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="tp-main-menu-mobile menu-hover-active counter-row">
              <nav>
                <MobileMenus />
              </nav>
            </div>
          </div>

          <div className="tp-offcanvas-right d-none d-md-block">
            <div className="tp-offcanvas-close text-end">
              <button className="tp-offcanvas-close-btn" onClick={() => setShowCanvas(false)}>
                <span className="text"><span>close</span></span>
                <span className="d-inline-block">
                  <span>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.80859 9.80762L28.1934 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.80859 28.1924L28.1934 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div className="tp-offcanvas-right-inner d-flex flex-column justify-content-between h-100">
              <div className="tpoffcanvas__right-info">
                <div className="tpoffcanvas__tel">
                  <a href="tel:3018015312">+1 (301) 801-5312</a>
                </div>
                <div className="tpoffcanvas__mail">
                  <a href="mailto:design@mattkhan.com">Matt@innateuxdesign.com</a>
                </div>
                <div className="tpoffcanvas__text">
                  <p>If in doubt, reach out.</p>
                </div>
                {/* CTA Button */}
                <div className="tpoffcanvas__cta">
  <a 
    href="https://calendly.com/mattkhan111/30min" 
    className="cta-button" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Schedule Consultation
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

export default Offcanvas;