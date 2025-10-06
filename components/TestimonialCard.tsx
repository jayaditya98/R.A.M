
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-ram-green border-l-4 border-ram-gold p-6 rounded-r-lg flex flex-col items-center text-center shadow-lg">
       <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full border-2 border-ram-gold mb-4" />
       <blockquote className="text-ram-light italic text-lg flex-grow">
        “{testimonial.quote}”
       </blockquote>
       <footer className="mt-4">
        <p className="font-heading text-ram-gold font-bold uppercase">{testimonial.name}</p>
        <p className="text-ram-grey text-sm">{testimonial.role}</p>
       </footer>
    </div>
  );
};

export default TestimonialCard;
