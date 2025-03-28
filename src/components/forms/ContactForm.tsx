'use client';
import React, { useState, useEffect } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useWatch } from 'react-hook-form';


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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    setValue, 
    control,
    watch,
    formState: { errors, isSubmitting } 
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
      categories: selectedCategories,
      name: '',
      email: '',
      company: '',
      message: '',
      budget: ''
    }
  });

  useEffect(() => {
    // Initialize form values after component mounts
    setValue('categories', selectedCategories || []);
  }, [selectedCategories, setValue]);

  const watchedBudget = useWatch({ control, name: 'budget' });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        //toast.success(result.message || "Message sent successfully!");
        setFormMessage({
          type: 'success',
          text: result.message || "Message sent successfully!"
        });

        reset();
        setActiveCategory(null);

        setTimeout(() => {
          setFormMessage(null);
        }, 10000);

      } else {
        setFormMessage({
          type: 'error',
          text: result.error || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormMessage({
        type: 'error',
        text: "Something went wrong. Please try again."
      });
    }
  };

  const handleBudgetSelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    setValue('budget', categoryId, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-inner__wrapper">
        <div className="postbox__comment-form">
          <h3 className="contact-inner__form-title">Request A Quote</h3>

          <div className="row gx-20">
            {["name", "company", "email"].map((field) => (
              <div key={field} className={`col-xxl-${field === "email" ? "12" : "6"} col-xl-6 col-lg-6`}>
                <div className="postbox__comment-input mb-35">
                  <input
                    type={field === "email" ? "email" : "text"}
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
                  >
                    <input
                      type="checkbox"
                      id={`category-${item.id}`}
                      checked={selectedCategories.includes(item.id)}
                      onChange={() => {
                        onCategoryToggle?.(item.id);
                      }}
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

          <div className="col-xl-12">
            <div className="contact-inner__category mb-45">
              <h4 className="contact-inner__category-title">Project budget (USD)</h4>
              <div className="contact-inner__category-wrapper">
                {/* {budgetCategories.map((item) => (
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
                ))} */}

                {budgetCategories.map((item) => (
                  <React.Fragment key={item.id}>
                    <input
                      type="radio"
                      id={item.id}
                      value={item.id}
                      {...register("budget")}
                      className="hidden-radio"
                    />
                    <label
                      htmlFor={item.id}
                      className={`contact-budget-btn ${watch('budget') === item.id ? 'active' : ''}`}
                    >
                      {item.title}
                    </label>
                  </React.Fragment>
                ))}
                <p className="form_error">{errors.budget?.message}</p>
              </div>
            </div>
          </div>

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

      
      {/* Custom Message Div with Bootstrap Classes */}

        {formMessage && (
          <div className={`mt-5 
            alert 
            ${formMessage.type === 'success' 
              ? 'alert-success' 
              : 'alert-danger'}
            alert-dismissible 
            fade 
            show 
            text-center
            fs-6
            py-2
          `}>
            {formMessage.text}
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="alert" 
              aria-label="Close"
              onClick={() => setFormMessage(null)}
            ></button>
          </div>
        )}

        </div>
      </div>
    </form>
  );
};

export default ContactForm;