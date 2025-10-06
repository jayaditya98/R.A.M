import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import { useCart } from '../hooks/useCart';

const CheckoutPage: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would process payment here.
        clearCart();
        navigate('/order-success');
    };

    if (cartItems.length === 0) {
        return (
            <Container className="py-16 text-center">
                <h1 className="text-2xl font-heading">Your cart is empty. Cannot proceed to checkout.</h1>
            </Container>
        )
    }

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ram-light uppercase">Checkout</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-ram-green p-8 rounded-lg border border-ram-grey/50">
                <h2 className="text-2xl font-heading text-ram-light uppercase mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Address</label>
                        <input type="text" id="address" name="address" required className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-ram-light uppercase tracking-wider">City</label>
                        <input type="text" id="city" name="city" required className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
                    </div>
                     <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Pincode</label>
                        <input type="text" id="pincode" name="pincode" required className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"/>
                    </div>
                </div>
                 <h2 className="text-2xl font-heading text-ram-light uppercase mt-10 mb-6">Payment Method (Prototype)</h2>
                 <div className="space-y-4">
                    <div className="flex items-center p-4 bg-ram-dark rounded-md border-2 border-ram-gold">
                        <input id="payment-upi" name="payment-method" type="radio" defaultChecked className="h-4 w-4 text-ram-gold bg-ram-grey border-ram-grey/50 focus:ring-ram-gold"/>
                        <label htmlFor="payment-upi" className="ml-3 block text-sm font-medium text-ram-light">
                            UPI / Credit Card / Debit Card
                        </label>
                    </div>
                 </div>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-ram-green p-6 rounded-lg border border-ram-grey/50 sticky top-28">
                    <h2 className="text-2xl font-heading text-ram-light uppercase border-b-2 border-ram-gold pb-2 mb-4">Your Order</h2>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-start">
                           <div>
                             <p className="font-product font-semibold text-ram-light">{item.name}</p>
                             <p className="text-sm text-ram-grey">Qty: {item.quantity}</p>
                           </div>
                           <p className="text-ram-light">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                    ))}
                    </div>
                    <div className="flex justify-between text-xl font-bold text-ram-gold pt-4 border-t border-ram-grey/50 mt-4">
                        <span>Total</span>
                        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                     <button
                        type="submit"
                        className="mt-6 w-full bg-ram-gold text-ram-dark px-6 py-3 rounded-sm font-heading uppercase text-base tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
      </form>
    </Container>
  );
};

export default CheckoutPage;