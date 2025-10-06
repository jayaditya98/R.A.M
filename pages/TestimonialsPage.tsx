
import React from 'react';
import Container from '../components/Container';
import TestimonialCard from '../components/TestimonialCard';
import { TESTIMONIALS } from '../constants';

const TestimonialsPage: React.FC = () => {
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-light uppercase">Words of Appreciation</h1>
        <p className="mt-2 text-ram-grey">From Our Valued Collectors and Community</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsPage;
