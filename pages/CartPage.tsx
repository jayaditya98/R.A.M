
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import { useCart } from '../hooks/useCart';
import { Trash2Icon, WhatsAppIcon } from '../components/icons';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  const whatsappUrl = useMemo(() => {
    if (cartItems.length === 0) return '#';

    const placeholderNumber = '919413760801'; // Placeholder WhatsApp number

    const itemsText = cartItems.map(item => 
        `- ${item.name} (Qty: ${item.quantity})`
    ).join('\n');

    const message = `Hello R.A.M., I'm interested in the following items from my cart:\n\n${itemsText}\n\nCart Total: ₹${cartTotal.toLocaleString('en-IN')}\n\nCould you please provide more details on payment and delivery? Thank you.`;

    return `https://wa.me/${placeholderNumber}?text=${encodeURIComponent(message)}`;
  }, [cartItems, cartTotal]);

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-light uppercase">Your Cart</h1>
      </div>
      {cartCount === 0 ? (
        <div className="text-center py-16 bg-ram-green border border-ram-grey/50 rounded-lg">
          <h2 className="text-2xl font-heading text-ram-light">Your cart is empty.</h2>
          <Link 
            to="/products"
            className="mt-6 inline-block bg-ram-gold text-ram-dark px-8 py-3 rounded-sm font-heading uppercase text-lg tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => {
              // Safety Check: Use the first image if it exists, otherwise use a placeholder.
              const imageUrl = item.images && item.images.length > 0
                ? item.images[0]
                : 'https://via.placeholder.com/800x600/283327/f0f0f0?text=R.A.M';

              return (
                <div key={item.id} className="flex items-center bg-ram-green p-4 rounded-lg border border-ram-grey/50">
                  <img src={imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-grow ml-4">
                    <h3 className="font-product font-semibold text-lg text-ram-light">{item.name}</h3>
                    <p className="text-ram-grey text-sm">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 bg-ram-grey text-ram-light text-center rounded-md border-ram-grey/50 focus:ring-ram-gold focus:border-ram-gold"
                    />
                    <button onClick={() => removeFromCart(item.id)} className="text-ram-grey hover:text-red-500 transition-colors">
                      <Trash2Icon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-ram-green p-6 rounded-lg border border-ram-grey/50 h-fit">
              <h2 className="text-2xl font-heading text-ram-light uppercase border-b-2 border-ram-gold pb-2 mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-ram-light">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-ram-light">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                 <div className="flex justify-between text-xl font-bold text-ram-gold pt-4 border-t border-ram-grey/50 mt-4">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="mt-6 w-full bg-ram-gold text-ram-dark px-6 py-3 rounded-sm font-heading uppercase text-base tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95"
              >
                Proceed to Checkout
              </button>
              <div className="text-center text-sm text-ram-grey my-4">OR</div>
               <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-sm font-heading uppercase text-base tracking-wider transition-all duration-300 transform hover:bg-green-700 active:scale-95"
                aria-label="Contact us on WhatsApp for details about your cart"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contact for Details
              </a>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
