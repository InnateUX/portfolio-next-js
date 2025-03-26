'use client';
import React from 'react';
import { CopyRight } from '@/components/common/SocialLinks';
import BehanceIconFooter from '@/svg/home/FooterIcons/BehanceIconFooter';
import GoogleIconFooter from '@/svg/home/FooterIcons/GoogleIconFooter';
import InstagramIconFooter from '@/svg/home/FooterIcons/InstagramIconFooter';
import Link from 'next/link';

interface DataType {
  title: string;
  title_2: JSX.Element;
  btn_text_1: string;
  btn_text_2: string;
}

const footer_content: DataType = {
  title: "Let's talk about the next big thing",
  title_2: <>Ready to Build? <br /><br />Let's talk about <br /> your project!</>,
  btn_text_1: 'Write a Message',
  btn_text_2: 'Discuss Project',
}

const { btn_text_1, btn_text_2, title_2 } = footer_content;

const FooterOne = ({ style }: any) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";

  return (
    <>
      <footer>
        <div className={`tp-footer-bg ${style ? "tp-footer__customize  black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="tp-footer-circle-1">
            <span></span>
          </div>
          <div className="tp-footer-circle-2">
            <span></span>
          </div>
          <div className="tp-footer-circle-3" data-speed=".7">
            <span></span>
          </div>
          <div className={`tp-footer-area ${style ? "tp-footer-inner__customize" : ""} pb-80 pt-120`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3 className={`tp-footer-title ${style ? "" : "big"} tp_title_anim`}>{title_2}</h3>
                  </div>
                </div>
              </div>
              {style ?
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <Link className="tp-btn-white-xl w-100" href="https://calendly.com/mattkhan111/30min">
                          <div>
                            <span>Free Consultation</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <Link className="tp-btn-grey-xl w-100" href="/contact">
                          <div>
                            <span>Discuss Project</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <a className="tp-btn-green w-100" href="mailto:WriteaMessage">
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <Link className="tp-btn-white-xl w-100" href="/contact">
                          <div>
                            <span>{btn_text_2}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }

              
            </div>
          </div>

          <div className="tp-copyright-area pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-left text-center text-md-start">
                    <p><CopyRight /></p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;