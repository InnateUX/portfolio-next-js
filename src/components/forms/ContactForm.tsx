'use client';
import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Ensure 'categories' is a string array with a default empty array
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
  categories: string[];
}

interface Category {
  id: string;
  title: string;
}

interface ContactFormProps {
  categories?: Category[];
  selectedCategories?: string[];
  onCategoryToggle?: (id: string) => void;
}

// Update schema to ensure type compatibility
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  company: yup.string().required("Company is required"),
  message: yup.string().required("Message is required"),
  budget: yup.string().required("Please select a budget"),
  categories: yup.array().of(yup.string()).min(1, "Please select at least one category"),
}).required();

const budgetCategories = [
  { id: "1-3k", title: "$1-3k" },
  { id: "3-5k", title: "$3-5k" },
  { id: "5-10k", title: "$5-10k" },
  { id: "10-20k", title: "$10-20k" },
  { id: "20-30k", title: "$20-30k" },
  { id: "greater-than-50k", title: "> $50k" },
];

const ContactForm = ({ 
  categories = [], 
  selectedCategories = [], 
  onCategoryToggle 
}: ContactFormProps) => {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Explicitly type the form with FormData
  const { 
    register, 
    handleSubmit, 
    reset, 
    setValue, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      // Ensure categories is always an array
      categories: selectedCategories || [],
      name: '',
      email: '',
      company: '',
      message: '',
      budget: ''
    },
  });

  useEffect(() => {
    setIsClient(true);
    // Update form value when selectedCategories changes
    setValue('categories', selectedCategories || []);
  }, [selectedCategories, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        reset();
        setActiveCategory(null);
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleBudgetSelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    setValue('budget', categoryId, { shouldValidate: true });
  };

  // Prevent rendering on server
  if (!isClient) {
    return null;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-inner__wrapper">
          <div className="postbox__comment-form">
            <h3 className="contact-inner__form-title">Request A Quote</h3>

            <div className="row gx-20">
              {["name", "company", "email"].map((field, index) => (
                <div key={index} className={`col-xxl-${field === "email" ? "12" : "6"} col-xl-6 col-lg-6`}>
                  <div className="postbox__comment-input mb-35">
                    <input
                      type="text"
                      className="inputText"
                      {...register(field as keyof FormData)}
                    />
                    <span className="floating-label">{`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}</span>
                    <p className="form_error">{errors[field as keyof FormData]?.message}</p>
                  </div>
                </div>
              ))}

              <div className="col-xxl-12">
                <div className="postbox__comment-input mb-20">
                  <textarea
                    className="textareaText"
                    {...register("message")}
                  ></textarea>
                  <span className="floating-label-2">Your Message</span>
                  <p className="form_error">{errors.message?.message}</p>
                </div>
              </div>
            </div>

            {/* Categories Selection */}
            {categories.length > 0 && (
              <div className="col-xl-12">
                <div className="contact-inner__category mb-45">
                  <h4 className="contact-inner__category-title">I'm interested in...</h4>
                  <div className="contact-inner__category-wrapper">
                    {categories.map((item) => (
                      <label
                        key={item.id}
                        htmlFor={`category-${item.id}`}
                        className={`contact-category-btn ${selectedCategories.includes(item.id) ? 'active' : ''}`}
                        onClick={() => onCategoryToggle?.(item.id)}
                      >
                        <input
                          type="checkbox"
                          id={`category-${item.id}`}
                          checked={selectedCategories.includes(item.id)}
                          onChange={() => onCategoryToggle?.(item.id)}
                          className="hidden-checkbox"
                        />
                        {item.title}
                      </label>
                    ))}
                    <p className="form_error">{errors.categories?.message}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Budget Selection */}
            <div className="col-xl-12">
              <div className="contact-inner__category mb-45">
                <h4 className="contact-inner__category-title">Project budget (USD)</h4>
                <div className="contact-inner__category-wrapper">
                  {budgetCategories.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={item.id}
                      className={`contact-budget-btn ${activeCategory === item.id ? 'active' : ''}`}
                      onClick={() => handleBudgetSelect(item.id)}
                    >
                      {item.title}
                    </label>
                  ))}
                  {budgetCategories.map((item) => (
                    <input
                      key={item.id}
                      type="radio"
                      value={item.id}
                      {...register("budget")}
                      id={item.id}
                      hidden
                    />
                  ))}
                  <p className="form_error">{errors.budget?.message}</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button 
                  type="submit" 
                  className="tp-btn-grey-lg" 
                  disabled={isSubmitting}
                >
                  <span><i>{isSubmitting ? 'Sending...' : 'Send Message'}</i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      
    </>
  );
};

export default ContactForm;