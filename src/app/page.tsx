import HomeOne from '@/components/homes/home-3';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "InnateUX Designs",
  description: "Crafting intuitive, user-centered digital experiences through nature-inspired design principles.",
  openGraph: {
    title: "Matt Khan - Natural UX Design",
    description: "Crafting intuitive, user-centered digital experiences through nature-inspired design principles.",
    images: [
      {
        url: 'https://innateuxdesign.com/assets/img/hero/fb_preview.png', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'InnateUX Design Preview Image',
      },
    ],
    url: "https://innateuxdesign.com",
    type: 'website',
  },
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
