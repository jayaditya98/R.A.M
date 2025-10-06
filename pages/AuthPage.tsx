
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import Container from '../components/Container';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate('/products');
    }
  }, [session, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Check your email for the confirmation link!');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ram-dark">
      <Container className="max-w-md w-full">
        <div className="bg-ram-green p-8 rounded-lg border border-ram-grey/50 shadow-lg shadow-ram-gold/10">
          <h1 className="text-3xl text-center font-heading font-extrabold text-ram-light uppercase mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-center text-ram-grey mb-6">
            {isLogin ? 'Sign in to continue' : 'Join the R.A.M. community'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ram-light uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full bg-ram-grey border-ram-grey/50 rounded-md shadow-sm py-2 px-3 text-ram-light focus:outline-none focus:ring-ram-gold focus:border-ram-gold"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-ram-gold text-ram-dark px-6 py-3 rounded-sm font-heading uppercase text-base tracking-wider transition-all duration-300 transform hover:bg-ram-light hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-sm text-ram-grey hover:text-ram-gold transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
