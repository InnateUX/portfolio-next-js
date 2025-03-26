'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import { scroller } from 'react-scroll';
import hero_shape_1 from "@/assets/img/hero/hero-shape-2-1.png";
import hero_shape_2 from "@/assets/img/hero/hero-shape-2-2.png";
import contact_img from "@/assets/img/contact/infinity.png"; // The image you want to display
import { HeroSocialLinksHomeThree } from '@/components/common/SocialLinks';

const scrollTo = () => {
  scroller.scrollTo('service', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroAreaHomeThree = () => {

  return (
    <>
      <div className="tp-hero-3__area black-bg-3 tp-hero-3__ptb z-index-1 smooth p-relative tp-btn-trigger-3">

        <div className="tp-hero-3__shape-1">
          <Image src={hero_shape_1} alt="image-here" />
        </div>
        <div className="tp-hero-3__shape-2">
          <Image src={hero_shape_2} alt="image-here" />
        </div>

        <div className="tp-isomeric-grid d-none">
          <div className="tp-isomeric-grid-item tp-isomeric-grid-horizontal">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tp-isomeric-grid-item tp-isomeric-grid-vertical">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-hero-3__content">
              <h3 className="tp-hero-3__title tp-char-animation" style={{ fontWeight: '100' }}>
  Hi there! {" "}
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '10px',
  }}>
    {/* Image inline with the text */}
    <Image
      src={contact_img}
      alt="Contact image"
      style={{
        width: 'auto',
        height: '90px', // Default size
        objectFit: 'contain',
      }}
      className="responsive-image" // Add a class to target with media queries
    />
  </span>
  <br />
  <b>I'm Matt Khan</b>
</h3>

<style jsx>{`
  .responsive-image {
    width: auto;
    height: 120px; /* Default size */
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .responsive-image {
      height: 80px; /* Smaller size for mobile */
    }
  }
`}</style>
              </div>
              <div className="tp-hero-3__btn-box tp_wrap_anim d-flex align-items-center justify-content-start justify-content-md-center">
                <div className="tp-btn-bounce-3">
                  <Link className="tp-btn-blue" href="/portfolio">
                    <span className="text">View My Work</span>
                    <span className="icon">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 1V10H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <p>
                I turn ideas into simple, intuitive, and seamless digital experiences.
<br />
 Inspired by nature’s principles, I design with accessibility and ease of use in mind.
<br />
 Let’s work together to bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeThree;