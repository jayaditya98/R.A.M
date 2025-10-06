import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const HomePage: React.FC = () => {

    const categories = [
        { name: 'Tanks', link: '/products', imageUrl: 'https://images.unsplash.com/photo-1581326629393-59724497e3f8?q=80&w=1920&auto=format&fit=crop' },
        { name: 'Aircraft', link: '/products', imageUrl: 'https://images.unsplash.com/photo-1544093938-e6b3b55a1a1f?q=80&w=1920&auto=format&fit=crop' },
        { name: 'Helicopters', link: '/products', imageUrl: 'https://images.unsplash.com/photo-1551818255-a2d813473263?q=80&w=1920&auto=format&fit=crop' },
    ];

    return (
        <div>
            {/* Categories Section */}
            <div className="bg-ram-dark">
                <div className="flex w-full">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.link}
                            className="group relative flex-1 h-48 bg-cover bg-center transition-all duration-300"
                            style={{ backgroundImage: `url(${cat.imageUrl})` }}
                            aria-label={`View products in the ${cat.name} category`}
                        >
                            <div className="absolute inset-0 bg-ram-dark/60 group-hover:bg-ram-dark/80 transition-all duration-300 flex items-center justify-center">
                                <h3 className="font-heading text-xl md:text-2xl uppercase text-ram-light group-hover:text-ram-gold transition-colors tracking-widest drop-shadow-lg">
                                    {cat.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Hero Section */}
            <div 
                className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('https://joxyeoinskwanszmzobp.supabase.co/storage/v1/object/public/product-images/mountain.png')" }}
            >
                <div className="absolute inset-0 bg-ram-dark opacity-70"></div>
                <Container className="relative z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-ram-light uppercase tracking-wider drop-shadow-lg">
                        Crafting History in 3D
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-ram-gold font-heading">
                        Rashtriya Artifacts & Models
                    </p>
                    <Link 
                        to="/products"
                        className="mt-8 inline-block bg-ram-gold text-ram-dark px-8 py-3 rounded-sm font-heading uppercase text-lg tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95"
                    >
                        Explore Collection
                    </Link>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;