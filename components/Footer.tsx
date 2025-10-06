
import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './icons';

export const Footer: React.FC = () => {
    const socialLinks = [
        { icon: <InstagramIcon className="h-6 w-6"/>, href: "#"},
        { icon: <FacebookIcon className="h-6 w-6"/>, href: "#"},
        { icon: <WhatsAppIcon className="h-6 w-6"/>, href: "#"}
    ];

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-ram-dark border-t border-ram-grey/50 mt-16">
            <Container className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-heading font-bold text-ram-light uppercase">
                            R<span className="text-ram-gold">.</span>A<span className="text-ram-gold">.</span>M
                        </h3>
                        <p className="text-ram-grey mt-2 text-sm">Crafting History in 3D</p>
                    </div>
                    <div>
                        <h4 className="font-heading uppercase text-ram-light tracking-wider">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-ram-grey hover:text-ram-gold transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading uppercase text-ram-light tracking-wider">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-ram-grey hover:text-ram-gold transition-colors p-2 border border-ram-grey rounded-full hover:border-ram-gold">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-ram-grey/50 pt-8 text-center text-ram-grey text-sm">
                    <p>&copy; {new Date().getFullYear()} Rashtriya Artifacts & Models. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
