
'use client'; 
import React from 'react';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
  {
    title: "Product Design",
    bg_img: "/assets/img/about/ab-1.png",
  },
  {
    title: "E-Commerce",
    bg_img: "/assets/img/about/ab-2.png",
  },
  {
    title: "Web Design",
    bg_img: "/assets/img/about/ab-3.png",
  },
  {
    title: "Graphic Design",
    bg_img: "/assets/img/about/ab-4.png",
  },
  {
    title: "Marketing",
    bg_img: "/assets/img/about/ab-4.png",
  }
]


const AboutInfo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ab-info__text">

                <div>
                  I'm Matt <span className="line"></span> a self-taught UX strategist and the creative mind behind ElementalUX, based just outside Washington, DC. <br /><br />I began my journey as a traditional graphic and web designer and now specialize in creating enjoyable, nature-inspired digital experiences. My work blends creativity with user-centered strategy to help clients bring their ideas to life. <br /> <br />

                  {info_data.map((item, index) =>
                    <React.Fragment key={index}>
                      <a className="tp-hover-reveal-item" href="#" onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        {item.title}
                        <span></span>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                      </a>, {' '}
                    </React.Fragment>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;