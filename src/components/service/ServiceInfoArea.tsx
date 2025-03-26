import Link from 'next/link'; 
import ServiceArrowIcon from '@/svg/service/ServiceArrowIcon';
import ServiceBrandingIcon from '@/svg/service/ServiceBrandingIcon';
import ServiceDevelopmentIcon from '@/svg/service/ServiceDevelopmentIcon';
import ServiceMobileIcon from '@/svg/service/ServiceMobileIcon';
import ServiceSoftwareIcon from '@/svg/service/ServiceSoftwareIcon';
import ServiceUiIcon from '@/svg/service/ServiceUiIcon';
import ServiceWebIcon from '@/svg/service/ServiceWebIcon';
import StarIcon from '@/svg/service/StarIcon';
import React from 'react';

interface DataType {
  description: React.JSX.Element;

  discovery_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
  }[];

  branding_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
  }[];

  design_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
  }[];

  development_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
  }[];

  market_strategy_data: {
    id: number;
    icon: React.JSX.Element;
    title: string;
  }[];
}

const service_info_content: DataType = {
  description: <><b>Customize Your Package to Fit Your Needs</b></>,

  // Discovery Section
  discovery_data: [
    { id: 1, icon: <ServiceBrandingIcon />, title: "User Research" },
    { id: 1, icon: <ServiceBrandingIcon />, title: "User Interviews" },
    { id: 1, icon: <ServiceBrandingIcon />, title: "Workshops" },
    { id: 1, icon: <ServiceBrandingIcon />, title: "UI/UX Audit" },
    { id: 1, icon: <ServiceBrandingIcon />, title: "Competitor Analysis" }
  ],

  // Branding Section
  branding_data: [
    { id: 1, icon: <ServiceWebIcon />, title: "Logo Design" },
    { id: 2, icon: <ServiceWebIcon />, title: "Brand Guidelines" },
    { id: 3, icon: <ServiceWebIcon />, title: "Visual Identity" },
    { id: 4, icon: <ServiceWebIcon />, title: "Graphic Design" },
    { id: 5, icon: <ServiceWebIcon />, title: "Brand Messaging" }
  ],

  // Design Section
  design_data: [
    { id: 1, icon: <ServiceUiIcon />, title: "Web Design" },
    { id: 2, icon: <ServiceUiIcon />, title: "UI/UX Design" },
    { id: 3, icon: <ServiceUiIcon />, title: "Mobile App Design" },
    { id: 4, icon: <ServiceUiIcon />, title: "Wireframing" },
    { id: 5, icon: <ServiceUiIcon />, title: "E-Commerce" }
  ],

  // Development Section
  development_data: [
    { id: 1, icon: <ServiceDevelopmentIcon />, title: "Web Development" },
    { id: 2, icon: <ServiceDevelopmentIcon />, title: "Software Development" },
    { id: 3, icon: <ServiceDevelopmentIcon />, title: "CMS Development" },
    { id: 4, icon: <ServiceDevelopmentIcon />, title: "Front-End Development" },
    { id: 5, icon: <ServiceDevelopmentIcon />, title: "Mobile Development" }
  ],

  // Marketing Section
  market_strategy_data: [
    { id: 1, icon: <ServiceMobileIcon />, title: "SEO" },
    { id: 2, icon: <ServiceMobileIcon />, title: "Content Marketing" },
    { id: 3, icon: <ServiceMobileIcon />, title: "Social Media Management" },
    { id: 4, icon: <ServiceMobileIcon />, title: "Paid Advertising" },
    { id: 5, icon: <ServiceMobileIcon />, title: "Analytics & Reporting" }
  ]
};

const { description, discovery_data, branding_data, design_data, development_data, market_strategy_data } = service_info_content;

const ServiceInfoArea = () => {
  return (
    <>
      <div className="sv-inner__info-area pt-120 pb-90 black-bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="sv-inner__info-title-box mb-90">
                <h4 className="sv-inner__info-title tp_title_anim">
                  {description}
                </h4>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Discovery Section */}
          <div className="row">
            <div className="col-xl-4">
              <div className="sv-inner__info-service">
                <h4 className="sv-inner__left-title" style={{ fontSize: '2rem' }}>
                  <span><StarIcon /></span> Discovery
                </h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="sv-inner__service-category-wrap">
                {discovery_data.map((item, i) => (
                  <div key={i} className="sv-inner__service-category">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="sv-inner__service-category-content">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Branding Section */}
          <div className="row">
            <div className="col-xl-4">
              <div className="sv-inner__info-service">
                <h4 className="sv-inner__left-title" style={{ fontSize: '2rem' }}>
                  <span><StarIcon /></span> Branding
                </h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="sv-inner__service-category-wrap">
                {branding_data.map((item, i) => (
                  <div key={i} className="sv-inner__service-category">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="sv-inner__service-category-content">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Design Section */}
          <div className="row">
            <div className="col-xl-4">
              <div className="sv-inner__info-service">
                <h4 className="sv-inner__left-title" style={{ fontSize: '2rem' }}>
                  <span><StarIcon /></span> Design
                </h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="sv-inner__service-category-wrap">
                {design_data.map((item, i) => (
                  <div key={i} className="sv-inner__service-category">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="sv-inner__service-category-content">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Development Section */}
          <div className="row">
            <div className="col-xl-4">
              <div className="sv-inner__info-service">
                <h4 className="sv-inner__left-title" style={{ fontSize: '2rem' }}>
                  <span><StarIcon /></span> Development
                </h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="sv-inner__service-category-wrap">
                {development_data.map((item, i) => (
                  <div key={i} className="sv-inner__service-category">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="sv-inner__service-category-content">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Marketing Section */}
          <div className="row">
            <div className="col-xl-4">
              <div className="sv-inner__info-service">
                <h4 className="sv-inner__left-title" style={{ fontSize: '2rem' }}>
                  <span><StarIcon /></span> Market Strategy
                </h4>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="sv-inner__service-category-wrap">
                {market_strategy_data.map((item, i) => (
                  <div key={i} className="sv-inner__service-category">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="sv-inner__service-category-content">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="tp-btn-bounce-3" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link className="tp-btn-blue" href="/contact" style={{ width: '500px', textAlign: 'center' }}>
              <span className="text" style={{ display: 'block' }}> Customize Your Package</span>
              <span className="icon" style={{ display: 'block' }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 1V10H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInfoArea;