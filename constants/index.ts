import { Product, Testimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'T-90 Bhishma Tank',
    description: 'A highly detailed 1:35 scale model of the Indian Army\'s main battle tank.',
    price: 4999,
    category: 'Tanks',
    images: ['https://i.postimg.cc/8Ck7p74p/tank-1.jpg', 'https://i.postimg.cc/W1Y4bVd5/tank-2.jpg'],
    scale: '1:35',
    materials: 'High-Quality Resin'
  },
  {
    id: 2,
    name: 'HAL Tejas Fighter Jet',
    description: 'A 1:72 scale model of India\'s indigenous multirole light fighter aircraft.',
    price: 3499,
    category: 'Aircraft',
    images: ['https://i.postimg.cc/pXv9vj0d/jet-1.jpg', 'https://i.postimg.cc/L86wLqGq/jet-2.jpg'],
    scale: '1:72',
    materials: 'ABS Plastic, Metal Parts'
  },
  {
    id: 3,
    name: 'Para SF Commando',
    description: 'A 1:16 scale action figure of a Para Special Forces operative with gear.',
    price: 2499,
    category: 'Soldiers',
    images: ['https://i.postimg.cc/50MN2gVn/soldier-1.jpg'],
    scale: '1:16',
    materials: 'PVC, Fabric'
  },
  {
    id: 4,
    name: 'Sukhoi Su-30MKI',
    description: 'A premium 1:48 scale model of the Indian Air Force\'s frontline air superiority fighter.',
    price: 7999,
    category: 'Aircraft',
    images: [], // Intentionally empty to test fallback image
    scale: '1:48',
    materials: 'High-Quality Resin'
  },
  {
    id: 5,
    name: 'Arjun MBT Mk-1A',
    description: 'A 1:35 scale model of the advanced Arjun Main Battle Tank.',
    price: 5499,
    category: 'Tanks',
    images: ['https://i.postimg.cc/sX3SjJcK/tank-3.jpg'],
    scale: '1:35',
    materials: 'High-Quality Resin'
  },
  {
    id: 6,
    name: 'Custom Order',
    description: 'A custom-designed and 3D-printed model based on your specifications.',
    price: 9999,
    category: 'Custom',
    images: [], // Intentionally empty to test fallback image
    scale: 'Varies',
    materials: 'Customer Choice'
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Major Vikram Singh (Retd.)',
    role: 'Collector',
    quote: 'The T-90 model is astonishingly detailed. It brings back memories of my time in the armored corps. A truly respectful tribute. Jai Hind!',
    avatar: 'https://picsum.photos/seed/vikram/100/100'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Hobbyist',
    quote: 'I bought the HAL Tejas model for my brother who is an aviation enthusiast. The quality is top-notch, and the customer service was excellent. Highly recommended.',
    avatar: 'https://picsum.photos/seed/ananya/100/100'
  },
  {
    id: 3,
    name: 'Rohan Desai',
    role: 'Scale Modeler',
    quote: 'As someone who builds models, I appreciate the precision of these 3D prints. They are the perfect base for a detailed paint job. The Para SF figure is next on my list.',
    avatar: 'https://picsum.photos/seed/rohan/100/100'
  }
];
