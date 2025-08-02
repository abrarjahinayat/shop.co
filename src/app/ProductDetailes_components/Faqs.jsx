"use client";
import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused, with tags still attached. Please visit our Returns page for details.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3–7 business days depending on your location. Express delivery options are also available at checkout.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by destination.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking link via email. You can also log in to your account to view tracking updates.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or canceled within 1 hour of placing them. Please contact our support team as soon as possible.",
  },
];
export default function Faqs() {

      const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    
  return (
    <section>
        <div className="container">
            <section className=" px-4 py-10">
    
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              className="flex justify-between items-center cursor-pointer w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggle(index)}
            >
              <span className="text-base font-poppins  font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white border-t font-poppins text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
        </div>
    </section>
  )
}
