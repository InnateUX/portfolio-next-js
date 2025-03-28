'use client'
import React, { useState } from 'react';
import Image from 'next/image';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contact_img from "@/assets/img/contact/infinity.png";
import contact_flower_img_1 from "@/assets/img/contact/contact-flower.png";
import contact_flower_img_2 from "@/assets/img/contact/contact-flower-text.png";
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../forms/ContactForm'), {
  ssr: false,
  loading: () => <p>Loading form...</p>
});

interface DataType {
  subtitle: string;
  title_1: string;
  title_2: string;
  mail_text: React.JSX.Element;
  categorys: { id: string; title: string }[];
}

const contact_content: DataType = {
  subtitle: "Contact Us",
  title_1: "Let’s Talk",
  title_2: "About your Project",
  mail_text: <>Interested in working with us? <br /> Submit your project inquiry using the form below.</>,
  categorys: [
    { id: "branding", title: "Branding" },
    { id: "web_design", title: "Web Design" },
    { id: "app_design", title: "App Design" },
    { id: "logo", title: "Logo" },
    { id: "digital_marketing", title: "Digital Marketing" },
    { id: "android_development", title: "iOS/Android Development" },
    { id: "iso_development", title: "E-Commerce" },
    { id: "design_concept", title: "Design Concept" },
    { id: "other", title: "Other" },
  ],
};

const ContactArea = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Toggle selection using string-based IDs
  const toggleSelection = (id: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((categoryId) => categoryId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="contact-inner__area contact-inner__ptb p-relative black-bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 offset-xl-1">
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-10">
                  <div className="contact-inner__top-section-title-box mb-70">
                    <span className="contact-inner__subtitle">{contact_content.subtitle}</span>
                    <h4 className="contact-inner__title tp-char-animation tp-hero-3__content">
                      {contact_content.title_1} {' '}
                      <span><Image src={contact_img} alt="Decorative Image" /></span> <br />
                      {contact_content.title_2}
                    </h4>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 d-none d-sm-block text-end">
                  <div className="contact-inner__shape-1 text-center text-lg-end">
                    <Image className="flower-img" src={contact_flower_img_1} alt="Decorative Flower" />
                    <Image className="flower-text" src={contact_flower_img_2} alt="Decorative Text" />
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
            {/* <div className="row">
              <div className="col-xl-12">
                <div className="contact-inner__category mb-85">
                  <h4 className="contact-inner__category-title">I'm interested in...</h4>
                  <div className="contact-inner__category-wrapper">
                    {contact_content.categorys.map((item) => (
                      <label key={item.id} htmlFor={item.id} className={`contact-category-btn ${selectedCategories.includes(item.id) ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={selectedCategories.includes(item.id)}
                          onChange={() => toggleSelection(item.id)}
                          className="hidden-checkbox"
                        />
                        {item.title}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
            <ContactForm 
              categories={contact_content.categorys}
              selectedCategories={selectedCategories}
              onCategoryToggle={toggleSelection}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;