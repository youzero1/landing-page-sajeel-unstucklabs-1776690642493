'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks! We'll be in touch at ${email}`);
    setEmail('');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-primary-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          Now in public beta — Try it free
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Collaborate Smarter,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">
            Ship Faster
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed mb-10">
          Nexus brings your entire team onto one unified platform — real-time editing, smart task management, and lightning-fast communication. All in one place.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap"
          >
            Start Free Trial
          </button>
        </form>

        <p className="text-sm text-gray-500 mb-16">
          No credit card required. 14-day free trial. Cancel anytime.
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex -space-x-3">
            {['bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'].map((color, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-white ${color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">4.9/5</strong> from 2,000+ teams
            </p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 max-w-5xl mx-auto">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 mx-4 bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-400 text-center">
                app.nexus.io/dashboard
              </div>
            </div>
            {/* Mock dashboard */}
            <div className="p-6 grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-3">
                {['Project Alpha', 'Design System', 'Backend API', 'Marketing Site'].map((item) => (
                  <div key={item} className="bg-gray-700 rounded-lg p-3">
                    <div className="h-2 w-3/4 bg-primary-400 rounded mb-2" />
                    <div className="text-gray-300 text-xs">{item}</div>
                  </div>
                ))}
              </div>
              <div className="col-span-2 bg-gray-700 rounded-lg p-4">
                <div className="h-3 w-1/3 bg-purple-400 rounded mb-4" />
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {['Tasks Done', 'In Progress', 'This Week'].map((label, i) => (
                    <div key={label} className="bg-gray-600 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">{[24, 8, 12][i]}</div>
                      <div className="text-xs text-gray-400 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[80, 60, 90, 45].map((width, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-gray-500 flex-shrink-0" />
                      <div className="flex-1 bg-gray-600 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-primary-400 to-purple-400"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 w-8">{width}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
