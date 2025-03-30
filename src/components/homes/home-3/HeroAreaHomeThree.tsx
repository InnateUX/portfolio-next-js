'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { scroller } from 'react-scroll';
import hero_shape_3 from "@/assets/img/hero/hero-shape-2-3.jpg";

const scrollTo = () => {
  scroller.scrollTo('service', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroAreaHomeThree = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width state on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set the initial width

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine font size based on the window width
  const getFontSizeForTitle = () => {
    if (windowWidth <= 480) {
      return 'calc(5vw + 2rem)';
    } else if (windowWidth <= 768) {
      return 'calc(6vw + 2rem)';
    } else {
      return 'calc(9vw + 2rem)';
    }
  };

  const getFontSizeForSubtitle = () => {
    if (windowWidth <= 480) {
      return 'calc(5vw + 0.5rem)';
    } else if (windowWidth <= 768) {
      return 'calc(6vw + 0.5rem)';
    } else {
      return 'calc(4vw + 0.5rem)';
    }
  };

  return (
    <>
      <div className="tp-hero-3__area black-bg-3 tp-hero-3__ptb z-index-1 smooth p-relative tp-btn-trigger-3" style={{ margin: 0, padding: 0 }}>
        <div
          className="tp-hero-3__shape-2"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            src={hero_shape_3}
            alt="hero shape image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />

          <div className="container" style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, textAlign: 'center'
          }}>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-3__content">
                  <h2 
                    className="tp-hero-3__title tp-char-animation"
                    style={{
                      fontSize: getFontSizeForTitle(), 
                      fontWeight: '600',
                      letterSpacing: '1px',
                      lineHeight: '1.2',
                      marginBottom: '1rem',
                      transition: 'font-size 0.3s ease-in-out'
                    }}>
                    Naturally Inspired
                  </h2>
                  <h3 
                    className="tp-hero-3__title tp-char-animation" 
                    style={{ 
                      fontSize: getFontSizeForSubtitle(), 
                      fontWeight: '400', 
                      letterSpacing: '1px', 
                      transition: 'font-size 0.3s ease-in-out' 
                    }}>
                    UX/UI Design
                  </h3>

                  <div className="tp-hero-3__btn-box tp_wrap_anim d-flex align-items-center justify-content-center">
                    <div className="tp-btn-bounce-3">
                      <Link className="tp-btn-blue" href="/contact">
                        <span className="text">Let’s Get Started!</span>
                        <span className="icon">
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 1V10H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </Link>
                    </div>
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

export default HeroAreaHomeThree;
