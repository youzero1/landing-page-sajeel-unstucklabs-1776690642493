export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create your workspace',
      description: 'Sign up in seconds and set up your team workspace. Invite members, set roles, and configure your first project.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      number: '02',
      title: 'Connect your tools',
      description: 'Integrate with your existing stack — GitHub, Figma, Notion, Slack, and more. Import data and get up to speed instantly.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      number: '03',
      title: 'Collaborate in real-time',
      description: 'Start working together seamlessly. Edit documents simultaneously, chat in context, and track progress in real-time.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      number: '04',
      title: 'Ship with confidence',
      description: 'Use analytics and insights to keep projects on track. Deliver consistently and celebrate wins as a team.',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Up and running in minutes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Getting started with Nexus is simple. Follow these four steps and your team will be collaborating like never before.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary-300 via-purple-300 to-orange-300" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl font-extrabold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
