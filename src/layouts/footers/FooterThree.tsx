'use client';

import { gsap } from "gsap";
import Link from 'next/link';
import Image from "next/image";
import React, { useEffect } from 'react';

import footer_img from "@/assets/img/footer/footer-3-1.png";
import footer_logo from "@/assets/img/logo/logo_white_2x.png";
import footer_btn from "@/assets/img/footer/foooter-btn.png";

import footer_shape_1 from "@/assets/img/footer/footer-shape.png";
import FooterBtnIcon from '@/svg/home-3/FooterBtnIcon';

interface DataType {
  subtitle: string;
  title: string;

  sm_info: React.JSX.Element;
  company_name: string;
  links: {
    title: string;
    link: string;
  }[];
  social_links: {
    name: string;
    icon: string;
    link: string;
  }[];
}

const footer_content: DataType = {
  subtitle: "Contact US",
  title: "Bring Your Vision to Life!",
  sm_info: (
    <>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed">
      Nature’s flow inspires my approach to UX design. I create digital experiences that feel natural, intuitive, and easy to navigate. <br /> Just as nature finds balance and adapts over time, I design functional, seamless solutions that ensure users have a smooth, meaningful experience. <br />For me, it’s all about crafting designs that feel effortless and genuinely connect with people.
      </p>
    </>
  ),
  links: [
    { title: "Portfolio", link: "/portfolio" },
    { title: "Services", link: "/service" },
    { title: "Schedule Consultation", link: "https://calendly.com/mattkhan111/30min?month=2025-02" },
  ],
  company_name: "Matt Khan UX",
  social_links: [
    { name: "Facebook", icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com" },
    { name: "Twitter", icon: "fa-brands fa-twitter", link: "https://www.twitter.com" },
    { name: "Dribbble", icon: "fa-brands fa-dribbble", link: "https://www.dribbble.com" },
    { name: "Instagram", icon: "fa-brands fa-instagram", link: "https://www.instagram.com" },
  ]
}

const { subtitle, title, sm_info, links, company_name, social_links } = footer_content;

const FooterThree = () => {

  // mouse move animation gsap
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const center = viewportWidth / 2;
    const centerHeight = viewportHeight / 2;

    if (x > center) {
      gsap.to('.tp-mouse-move-btn', {
        x: 100,
        duration: 2,
        ease: 'power4.out',
      });
    } else {
      gsap.to('.tp-mouse-move-btn', {
        x: -100,
        duration: 2,
        ease: 'power4.out',
      });
    }
    if (y > centerHeight) {
      gsap.to('.tp-mouse-move-btn', {
        y: 100,
        duration: 2,
        ease: 'power4.out',
      });
    } else {
      gsap.to('.tp-mouse-move-btn', {
        y: -100,
        duration: 2,
        ease: 'power4.out',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <footer>
        <div className="tp-footer-3__wrapper tp-footer-3__overlay-bg black-bg-2 p-relative z-index-1 fix tp-mouse-move-btn-section">
          <div className="tp-footer-3__shape-1">
            <Image src={footer_shape_1} alt="image-here" />
          </div>
          <div className="tp-footer-3__area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="tp-footer-3__title-box">
                    <span className="tp-footer-3__subtitle">{subtitle}</span>
                    <h3 className="tp-footer-3__title tp_title_anim">{title}</h3>
                  </div>
                  <div className="tp-footer-3__widget">
                    <div className="tp-footer-3__widget-top d-flex align-items-center justify-content-between">
                      <div className="tp-footer-3__logo">
                        <Link href="/contact">
                          <Image src={footer_logo} alt="image-here" />
                        </Link>
                      </div>
                    </div>
                  {/* Links Section */}
<div className="tp-footer-3__menu">
  <ul style={{ display: 'flex', justifyContent: 'flex-start', listStyle: 'none', padding: 30, margin: 0 }}>
    {links.map((item, index) => (
      <li key={index} style={{ marginRight: '20px' }}>  {/* Remove left margin, keep spacing between links */}
        <Link href={item.link} style={{ color: '#fff', fontSize: '16px' }}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
</div>

                    <div className="tp-footer-3__text">
                      <p className="tp_title_anim">{sm_info}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <div className="tp-footer-3__link text-xxl-start text-center">
                    <a className="p-relative d-inline-block tp-mouse-move-btn" href="#">
                      <Image src={footer_btn} alt="image-here" />
                      <span>
                        <FooterBtnIcon />
                        <FooterBtnIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-copyright-3__area">
            <div className="tp-copyright-3__border-top">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="tp-copyright-3__left text-center text-md-start">
                      <p>© {new Date().getFullYear()} {company_name}</p>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 d-none d-md-block">
                    {/* Social Links */}
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

export default FooterThree;