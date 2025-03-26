'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import project_img_1 from "@/assets/img/portfolio/3/Bright_project_cover.png";
import project_img_2 from "@/assets/img/portfolio/3/Lucketts_project_cover.png";
import project_img_3 from "@/assets/img/portfolio/3/AvriStories_Project_cover.png";
import project_img_4 from "@/assets/img/portfolio/3/YellowHat_project_cover.png";
import project_img_5 from "@/assets/img/portfolio/3/stylisticme_product_cover.png";

// Define the project data with titles and slugs
const projects = [
  {
    title: "BrightMLS",
    img: project_img_1,
    slug: "portfolio-details-bright"
  },
  {
    title: "Lucketts",
    img: project_img_2,
    slug: "portfolio-details-lucketts"
  },
  {
    title: "Avri Stories",
    img: project_img_3,
    slug: "portfolio-details-avristories"
  },
  {
    title: "Yellow Hat",
    img: project_img_4,
    slug: "portfolio-details-yellowhat"
  },
  {
    title: "StylisticMe",
    img: project_img_5,
    slug: "portfolio-details-stylisticme"
  }
];

const ProjectAreaHomeThree = () => {
  const hoverTextRefs: React.RefObject<HTMLDivElement>[] | any = [];

  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs[index];

    if (hoverTextRef.current) {
      const item = hoverTextRef.current.getBoundingClientRect();
      const x = e.clientX - item.left;
      const y = e.clientY - item.top;

      const children = hoverTextRef.current.children;
      if (children[0] && children[0].children[2]) {
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  return (
    <>
      <div className="tp-project-3__area p-relative black-bg-3 pt-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-3__title-box pb-30 text-center portfolio-sec-pin">
                <h3 className="tp-section-title-3 tp_title_anim">Featured Projects</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-portfolio-item-wrapper-3">

                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
                    ref={(element) => {
                      hoverTextRefs[index] = React.createRef();
                      hoverTextRefs[index].current = element;
                    }}
                    onMouseMove={(e) => moveText(e, index)} 
                  >
                    {/* Use project.slug for a unique URL */}
                    <Link href={`/${project.slug}`}>
                      <Image 
                        src={project.img} 
                        alt={`${project.title} image`} 
                        width={600} // Set width for optimization
                        height={400} // Set height for optimization
                        style={{ height: 'auto', width: '100%' }} // Ensure proper styling
                      />
                      <span></span>
                      <div className="tp-portfolio-view-btn-3">
                        <span>View <br /> Work</span>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeThree;