export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create your workspace',
      description: 'Sign up in seconds and set up your team workspace. Invite members, set roles, and configure your first project.',
      gradient: 'from-violet-500 to-purple-600',
      iconBg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Connect your tools',
      description: 'Integrate with your existing stack — GitHub, Figma, Notion, Slack, and more. Import data and get up to speed instantly.',
      gradient: 'from-fuchsia-500 to-pink-600',
      iconBg: 'bg-fuchsia-500/10',
      border: 'border-fuchsia-500/30',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Collaborate in real-time',
      description: 'Start working together seamlessly. Edit documents simultaneously, chat in context, and track progress in real-time.',
      gradient: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Ship with confidence',
      description: 'Use analytics and insights to keep projects on track. Deliver consistently and celebrate wins as a team.',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass text-purple-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Getting started with Nexus is simple. Follow these four steps and your team will be collaborating like never before.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-0 h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="relative glass rounded-2xl p-7 hover:border-violet-500/30 card-hover text-center">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#0a0a0f] border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-105 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
