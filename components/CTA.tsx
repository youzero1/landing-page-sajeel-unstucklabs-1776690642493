'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks! We'll be in touch at ${email}`);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-purple-900 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          14-day free trial • No credit card required
        </div>

        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to transform
          <br />
          how your team works?
        </h2>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Join 2,000+ teams that already use Nexus to collaborate smarter, move faster, and build better products.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-400 to-purple-500 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap"
          >
            Get Started Free
          </button>
        </form>

        <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-400">
          {[
            '✓ No credit card required',
            '✓ Setup in 2 minutes',
            '✓ Cancel anytime',
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
