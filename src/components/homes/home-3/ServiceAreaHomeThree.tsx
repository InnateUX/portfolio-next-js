'use client';
import Link from 'next/link'; 
import Image from 'next/image';
import React from 'react';
import circle_img from "@/assets/img/footer/footer-circle-img.png";
import service_shape_1 from "@/assets/img/portfolio/shape-1.png";
import service_shape_2 from "@/assets/img/portfolio/shape-2.png";
import service_star_icon from "@/assets/img/portfolio/star.png";
import DiscoveryIcon from '@/svg/home-3/DiscoveryIcon';
import BrandingIcon from '@/svg/home-3/BrandingIcon';
import DesignIcon from '@/svg/home-3/DesignIcon';
import DevelopmentIcon from '@/svg/home-3/DevelopmentIcon';
import MarketingIcon from '@/svg/home-3/MarketingIcon';

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_info: React.JSX.Element;
  btn_text: React.JSX.Element;
  service_data: {
    id: number;
    icon: JSX.Element;
    title: React.JSX.Element;
    sm_des: React.JSX.Element;
    tag_1: string;
    tag_2: string;
    tag_3: string;
    tag_4: string;
  }[];
}

const service_content: DataType = {
  subtitle: "MY PROCESS",
  title: <> Designing with Empathy Helps to Elevate Your Users Experience</>, 
  sm_info: <> Prioritizing users leads to intuitive, accessible, and meaningful experiences that truly connect. Great design isn’t just seen...it’s felt.</>,
  btn_text: <> See How I Can Help </>,
  service_data: [
    {
      id: 1,
      icon: <DiscoveryIcon />,
      title: <>Discovery / Research</>,
      sm_des: <></>,
      tag_1: "UI/UX Audit",
      tag_2: "User Research",
      tag_3: "User Interviews",
      tag_4: "Workshops",
    },
    {
      id: 2,
      icon: <BrandingIcon />,
      title: <>Branding</>,
      sm_des: <></>,
      tag_1: "Logo Design",
      tag_2: "Brand Guidelines",
      tag_3: "Visual Identity",
      tag_4: "Graphic Design",
    },
    {
      id: 3,
      icon: <DesignIcon />,
      title: <>Design</>,
      sm_des: <></>,
      tag_1: "UX/UI Web Design",
      tag_2: "Wireframing",
      tag_3: "E-Commerce Stores",
      tag_4: "Mobile Apps",
    },
    {
      id: 4,
      icon: <DevelopmentIcon />,
      title: <>Front-End <br /> Development</>,
      sm_des: <></>,
      tag_1: "Responsive Design",
      tag_2: "Optimization",
      tag_3: "iOS & Android",
      tag_4: "Apps",
    },
    {
      id: 5,
      icon: <MarketingIcon />,
      title: <>Market Strategy</>,
      sm_des: <></>,
      tag_1: "SEO",
      tag_2: "Content Marketing",
      tag_3: "Social Media",
      tag_4: "Advertising",
    },
  ]
};

const { subtitle, title, sm_info, btn_text, service_data } = service_content;

const ServiceAreaHomeThree = ({ style }: any) => {
  return (
    <div id="service" className={`tp-service-3__area services-panel-area tp-service-3__overlay-bg ${style ? 'sv-iiner__customize' : ''} black-bg-2 pt-150 pb-125 z-index-1`}>
      <div className="tp-service-3__circle-img">
        <span className="text-img">
          <Image src={circle_img} alt="image-here" />
        </span>
        <div className="shape d-none d-lg-block">
          <svg width="260" height="70" viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z" fill="currentcolor" />
          </svg>
        </div>
      </div>

      <div className="tp-service-3__shape-1">
        <Image src={service_shape_1} alt="image-here" />
      </div>
      <div className="tp-service-3__shape-2 d-none d-lg-block">
        <Image src={service_shape_2} alt="image-here" />
      </div>
      <div className="tp-service-3__shape-3">
        <Image data-speed="1.2" src={service_star_icon} alt="image-here" />
      </div>
      <div className="tp-service-3__shape-3">
        <Image data-speed=".7" src={service_star_icon} alt="image-here" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="tp-service-3__title-box services-panel-pin">
              <span className="tp-section-subtitle-3 tp_title_anim wow fadeIn">{subtitle}</span>
              <h3 className="tp-section-title-3 tp_title_anim wow fadeInUp" data-wow-delay="0.2s">{title}</h3>
              <p className="tp_title_anim wow fadeInUp" data-wow-delay="0.4s">{sm_info}</p>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="tp-service-3__right-wrap">
              {service_data.map((item) => (
                <div
                  key={item.id}
                  className="tp-service-3__item d-flex align-items-start mb-25 services-panel wow fadeInUp"
                  data-wow-delay={`${item.id * 0.1}s`}
                  style={{
                    backgroundColor: item.id === 1
                      ? '#0F183E' // Background for Discovery / Research
                      : item.id === 2
                      ? '#0F183E' // Background for Branding
                      : item.id === 3
                      ? '#0F183E' // Background for Design
                      : item.id === 4
                      ? '#0F183E' // Background for Front-End Development
                      : item.id === 5
                      ? '#0F183E' // Background for Marketing Strategy
                      : 'transparent' // Default background
                  }}
                >
                  <div className="tp-service-3__icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="tp-service-3__content">
                    <h3 className="tp-service-3__content-title">
                      <Link href="/service">{item.title}</Link>
                    </h3>
                    <p>{item.sm_des}</p>
                    <div className="tp-service-3__content-tag">
                      <span className="mb-5 mr-5">{item.tag_1}</span>
                      <span className="mb-5 mr-5">{item.tag_2}</span>
                      <span className="mb-5 mr-5">{item.tag_3}</span>
                      <span className="mb-5 mr-5">{item.tag_4}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="tp-service-3__btn-box wow fadeInUp" data-wow-delay="0.6s">
                <Link href="/service/">{btn_text}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaHomeThree;