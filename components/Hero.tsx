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
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet-900/30 rounded-full blur-[120px]" />
        {/* Top right accent */}
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
        {/* Bottom left accent */}
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Fade grid at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10 text-sm font-medium text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            Now in public beta — Try it free
            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Collaborate Smarter,</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400">
              Ship Faster
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed mb-10">
            Nexus brings your entire team onto one unified platform — real-time editing, smart task management, and lightning-fast communication. All in one place.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="w-full px-5 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-sm text-sm"
              />
            </div>
            <button
              type="submit"
              className="relative group whitespace-nowrap"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold px-7 py-4 rounded-full text-sm">
                Start Free Trial
              </div>
            </button>
          </form>

          <p className="text-sm text-gray-500 mb-16">
            No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; Cancel anytime
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex -space-x-3">
              {[
                { color: 'from-pink-400 to-rose-500', letter: 'A' },
                { color: 'from-purple-400 to-violet-500', letter: 'B' },
                { color: 'from-blue-400 to-indigo-500', letter: 'C' },
                { color: 'from-emerald-400 to-green-500', letter: 'D' },
                { color: 'from-amber-400 to-orange-500', letter: 'E' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {item.letter}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <strong className="text-white">4.9/5</strong> from 2,000+ teams
              </p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-24 relative max-w-5xl mx-auto">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-4 bg-white/3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-4 bg-white/5 rounded-full px-4 py-1.5 text-xs text-gray-500 text-center">
                  app.nexus.io/dashboard
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-500">Live</span>
                </div>
              </div>

              {/* Mock dashboard */}
              <div className="p-6 grid grid-cols-3 gap-4 bg-[#0f0f1a]">
                {/* Sidebar */}
                <div className="col-span-1 space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Projects</div>
                  {[
                    { name: 'Project Alpha', progress: 80, color: 'bg-violet-500' },
                    { name: 'Design System', progress: 60, color: 'bg-fuchsia-500' },
                    { name: 'Backend API', progress: 45, color: 'bg-blue-500' },
                    { name: 'Marketing Site', progress: 90, color: 'bg-emerald-500' },
                  ].map((item) => (
                    <div key={item.name} className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-violet-500/30 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-300 text-xs font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.progress}%</div>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full">
                        <div className={`h-1 ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-2 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Tasks Done', value: '24', change: '+12%', color: 'text-emerald-400' },
                      { label: 'In Progress', value: '8', change: '-2', color: 'text-amber-400' },
                      { label: 'This Week', value: '12', change: '+5', color: 'text-violet-400' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                        <div className={`text-xs ${stat.color} mt-1 font-medium`}>{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Recent Activity</div>
                    <div className="space-y-2.5">
                      {[
                        { user: 'SC', name: 'Sarah', action: 'completed', task: 'API Integration', color: 'from-pink-400 to-rose-500', time: '2m' },
                        { user: 'MR', name: 'Marcus', action: 'reviewed', task: 'Dashboard UI', color: 'from-violet-400 to-purple-500', time: '15m' },
                        { user: 'EW', name: 'Emily', action: 'pushed', task: 'Auth module', color: 'from-blue-400 to-indigo-500', time: '1h' },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                            {activity.user}
                          </div>
                          <div className="flex-1 text-xs text-gray-400">
                            <span className="text-gray-200 font-medium">{activity.name}</span> {activity.action}{' '}
                            <span className="text-violet-400">{activity.task}</span>
                          </div>
                          <div className="text-xs text-gray-600">{activity.time} ago</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
