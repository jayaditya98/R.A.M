
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../context/AuthContext';
import { ShoppingCartIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ram-dark/95 backdrop-blur-sm border-b border-ram-grey/50' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-heading font-bold text-ram-light uppercase">
          R<span className="text-ram-gold">.</span>A<span className="text-ram-gold">.</span>M
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-heading uppercase tracking-wider transition-colors ${
                  isActive ? 'text-ram-gold' : 'text-ram-light hover:text-ram-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-ram-light hover:text-ram-gold transition-colors">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-ram-gold text-xs font-bold text-ram-dark">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <button onClick={handleSignOut} className="hidden md:block bg-ram-gold/20 text-ram-gold px-4 py-2 text-sm rounded-md border border-ram-gold/50 hover:bg-ram-gold hover:text-ram-dark transition-colors">
              Logout
            </button>
          ) : (
            <Link to="/auth" className="hidden md:block bg-ram-gold/20 text-ram-gold px-4 py-2 text-sm rounded-md border border-ram-gold/50 hover:bg-ram-gold hover:text-ram-dark transition-colors">
              Login
            </Link>
          )}

          <button className="md:hidden text-ram-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-ram-dark/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`} style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(-150%)' }}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-heading text-lg uppercase tracking-wider transition-colors ${
                  isActive ? 'text-ram-gold' : 'text-ram-light hover:text-ram-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-ram-grey/50 w-full flex justify-center mt-4">
            {user ? (
              <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="bg-ram-gold/20 text-ram-gold px-6 py-2 rounded-md border border-ram-gold/50">
                Logout
              </button>
            ) : (
              <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="bg-ram-gold/20 text-ram-gold px-6 py-2 rounded-md border border-ram-gold/50">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
