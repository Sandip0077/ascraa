
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// FILE: src/components/FAQAccordion.js
const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "What are the top 3 tips for a great video resume?", a: "1. Script your key points, but don't read directly. Let your personality shine. 2. Ensure good lighting and a clean, professional background. 3. Dress professionally and speak clearly and confidently." },
        { q: "How does the AI matching benefit me as a student?", a: "Our AI analyzes your video for skills, communication style, and confidence. It then matches your unique profile to job descriptions, increasing your chances of finding a role that's a perfect fit for your abilities and personality, not just keywords on a resume." },
        { q: "As a recruiter, how can I trust the candidates are authentic?", a: "We have a mandatory government ID verification step before any student can apply for a job. This ensures that the profiles you review belong to real, verified individuals, adding a layer of trust and security to your hiring process." },
        { q: "Can I edit my profile after creating it?", a: "Absolutely! You can update your video resume, skills, and personal information at any time from your profile page. We encourage you to keep your profile fresh and up-to-date." },
        { q: "What kind of jobs can I find on ascra?", a: "We partner with a wide range of companies, from innovative startups to large corporations, offering internships and full-time positions across various fields like tech, marketing, design, and more." }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none"
            >
                <span>{faq.q}</span>
                <ChevronDownIcon className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="p-5 pt-0 text-gray-600">
                {faq.a}
                </div>
            </div>
            </div>
        ))}
        </div>
    );
};
export default FAQAccordion;
