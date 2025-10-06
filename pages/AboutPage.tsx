
import React from 'react';
import Container from '../components/Container';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-ram-green">
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-light uppercase">About R.A.M</h1>
            <p className="mt-4 text-lg text-ram-gold">Rashtriya Artifacts & Models</p>
            <div className="mt-6 space-y-4 text-ram-light/90">
              <p>
                Founded from a deep-seated respect for the Indian Armed Forces and a passion for precision engineering, Rashtriya Artifacts & Models (RAM) is dedicated to preserving military history in stunning detail. We specialize in creating high-fidelity scale models of iconic military hardware, from the battle-hardened T-90 Bhishma tank to the formidable Sukhoi Su-30MKI fighter jet.
              </p>
              <p>
                Our vision is to provide collectors, hobbyists, and patriots with tangible pieces of our nation's legacy of valor. Each model is a product of meticulous research, cutting-edge 3D printing technology, and a craftsman's touch, ensuring an unparalleled level of accuracy and quality.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
             <img src="https://picsum.photos/seed/aboutus/600/700" alt="Craftsman working on a model" className="rounded-lg shadow-xl border-4 border-ram-grey"/>
          </div>
        </div>

        <div className="mt-20 bg-ram-dark p-8 rounded-lg border border-ram-grey/50">
          <h2 className="text-3xl font-heading text-center text-ram-gold uppercase">A Note from the Founder</h2>
          <div className="mt-6 text-center text-ram-light/90 max-w-3xl mx-auto italic">
            <p>
              "This venture is more than a business; it's a tribute. A tribute to the courage of our soldiers, the ingenuity of our engineers, and the indomitable spirit of our nation. Every model we create is infused with a sense of patriotism and a commitment to excellence. We are not just selling models; we are sharing stories of bravery and innovation, one masterpiece at a time. Thank you for joining us on this journey."
            </p>
            <p className="mt-4 not-italic font-bold">- Founder, R.A.M.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
