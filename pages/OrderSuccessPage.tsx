
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const OrderSuccessPage: React.FC = () => {
  return (
    <Container className="py-16 flex items-center justify-center">
      <div className="text-center py-20 px-10 bg-ram-green border border-ram-gold/50 rounded-lg shadow-lg shadow-ram-gold/10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-gold uppercase">Thank You!</h1>
        <p className="mt-4 text-lg text-ram-light">Your order has been placed successfully.</p>
        <p className="mt-2 text-ram-grey">You will receive a confirmation email shortly. Jai Hind!</p>
        <Link 
          to="/products"
          className="mt-8 inline-block bg-ram-gold text-ram-dark px-8 py-3 rounded-sm font-heading uppercase text-lg tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95"
        >
          Continue Shopping
        </Link>
      </div>
    </Container>
  );
};

export default OrderSuccessPage;
