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
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-[#0a0a0f] to-purple-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-800/20 rounded-full blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10 text-sm font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          14-day free trial · No credit card required
        </div>

        <h2 className="text-4xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Ready to transform
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400">
            how your team works?
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Join 2,000+ teams that already use Nexus to collaborate smarter,
          <br className="hidden sm:block" />
          move faster, and build better products.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-10">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="w-full px-5 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-sm text-sm"
            />
          </div>
          <button
            type="submit"
            className="relative group whitespace-nowrap"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold px-7 py-4 rounded-full text-sm">
              Get Started Free
            </div>
          </button>
        </form>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: '✓', text: 'No credit card required' },
            { icon: '✓', text: 'Setup in 2 minutes' },
            { icon: '✓', text: 'Cancel anytime' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-violet-400 font-bold">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
