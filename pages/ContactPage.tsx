
import React from 'react';
import Container from '../components/Container';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../components/icons';

const ContactPage: React.FC = () => {

  const instagramPosts = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/insta${i}/400/400`);
    
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-light uppercase">Get In Touch</h1>
        <p className="mt-2 text-ram-grey">We're here to help with custom orders, questions, and feedback.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-ram-green p-8 rounded-lg border border-ram-grey/50">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
              </div>
            </div>
            <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"></textarea>
            </div>
            <div className="mt-6">
                <button type="submit" className="w-full bg-ram-gold text-ram-dark px-6 py-3 rounded-sm font-heading uppercase text-base tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95">
                    Send Message
                </button>
            </div>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-ram-green p-8 rounded-lg border border-ram-grey/50">
            <h3 className="text-2xl font-heading text-ram-gold uppercase">Contact Details</h3>
            <p className="mt-4 text-ram-light">123 Defence Colony, New Delhi, India</p>
            <p className="mt-2 text-ram-light">contact@rashtriyamodels.in</p>
            <div className="mt-6 flex space-x-4">
                <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <WhatsAppIcon className="h-5 w-5"/> Quick Chat
                </a>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-ram-grey/50">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.347719602058!2d77.234344315081!3d28.55930298244795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b50000001%3A0x393433f48a51374d!2sDefence%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1678886455123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Instagram Feed */}
       <div className="mt-20">
        <h2 className="text-3xl font-heading text-center text-ram-light uppercase mb-8">Follow Our Operations on Instagram</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((src, index) => (
            <a href="#" key={index} className="group block aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <InstagramIcon className="h-8 w-8 text-white"/>
                </div>
            </a>
          ))}
        </div>
      </div>

    </Container>
  );
};

export default ContactPage;
