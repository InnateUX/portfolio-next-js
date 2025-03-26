'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';

// Import project images
import project_img_1 from '@/assets/img/portfolio/3/Bright_portfolio.png';
import project_img_2 from '@/assets/img/portfolio/3/Lucketts_portfolio.png';
import project_img_3 from '@/assets/img/portfolio/3/Avristories_portfolio.png';
import project_img_4 from '@/assets/img/portfolio/3/Yellowhat_portfolio.png';
import project_img_5 from '@/assets/img/portfolio/3/Stylisticme_portfolio.png';
import project_img_6 from '@/assets/img/portfolio/3/Comingsoon_portfolio.png';

interface Project {
  id: number;
  img: StaticImageData;
  bg_img: string;
  title: string;
  category: string[];
  url: string;
}

// Portfolio data
const project_content: Project[] = [
  {
    id: 1,
    img: project_img_1,
    bg_img: '/assets/img/portfolio/3/Bright_portfolio.png',
    title: 'BrightMLS',
    category: ['UX Design', 'Branding'],
    url: '/portfolio-details-bright/', // Updated to full URL
  },
  {
    id: 2,
    img: project_img_2,
    bg_img: '/assets/img/portfolio/3/Lucketts_portfolio.png',
    title: 'Lucketts',
    category: ['E-Commerce', 'Marketing'],
    url: '/portfolio-details-lucketts/', // Updated to full URL
  },
  {
    id: 3,
    img: project_img_3,
    bg_img: '/assets/img/portfolio/3/Avristories_portfolio.png',
    title: 'Avri Stories',
    category: ['App Development', 'UX Design'],
    url: '/portfolio-details-avristories/', // Updated to full URL
  },
  {
    id: 4,
    img: project_img_4,
    bg_img: '/assets/img/portfolio/3/Yellowhat_portfolio.png',
    title: 'Yellow Hat',
    category: ['UX Design', 'Branding'],
    url: '/portfolio-details-yellowhat/', // Updated to full URL
  },
  {
    id: 5,
    img: project_img_5,
    bg_img: '/assets/img/portfolio/3/Stylisticme_portfolio.png',
    title: 'StylisticMe',
    category: ['E-Commerce', 'Marketing'],
    url: '/portfolio-details-stylisticme/', // Updated to full URL
  },
  {
    id: 6,
    img: project_img_6,
    bg_img: '/assets/img/portfolio/3/Comingsoon_portfolio.png',
    title: 'Coming Soon',
    category: ['Branding'],
    url: '#', // Placeholder for coming soon
  }
];

const PortfolioArea = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(project_content);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    gsap.set('.tp-portfolio-bg-text', { x: '25%' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    }).to('.tp-portfolio-bg-text', { x: '-80%' });

  }, []);

  // Filter function
  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(project_content);
    } else {
      setFilteredProjects(project_content.filter(project => project.category.includes(category)));
    }
  };

  return (
    <>
      <div className="portfolio-container black-bg-3 pt-80 pb-50">
        
        {/* Filter Buttons */}
        <div className="portfolio-filter text-center mb-40">
          {['All', 'UX Design', 'Marketing', 'Branding', 'E-Commerce', 'App Development'].map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Items */}
        <div className="container">
          <div className="row grid gx-30">
            {filteredProjects.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 grid-item">
                <div className="tp-portfolio-item mb-30">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" passHref>
                    <div className="tp-portfolio-thumb w-img fix">
                      <Image src={item.img} alt={item.title} layout="responsive" width={400} height={300} />
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <div className="tp-portfolio-meta">
                        <span>{item.category.join(', ')}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .portfolio-filter {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 12px 30px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          border-radius: 50px; /* Rounded pill shape */
          font-weight: 500;
        }

        .filter-btn.active, .filter-btn:hover {
          background: white;
          color: black;
        }

        .tp-portfolio-item {
          background: #1a1a1a;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          height: 100%;
        }

        .tp-portfolio-thumb img {
          border-radius: 10px;
        }

        .tp-portfolio-title {
          margin-top: 15px;
          font-size: 18px;
          color: white;
        }

        .tp-portfolio-meta {
          font-size: 14px;
          color: gray;
        }
      `}</style>
    </>
  );
};

export default PortfolioArea;