export default function Testimonials() {
  const testimonials = [
    {
      quote: "Nexus completely transformed how our engineering team works. We shipped 40% more features last quarter than ever before. The real-time collaboration alone is worth the price.",
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'Stripe',
      initials: 'SC',
      color: 'bg-blue-500',
    },
    {
      quote: "I've tried every project management tool out there. Nexus is the only one that actually gets out of your way and lets your team do great work. Switching was the best decision we made.",
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'Airbnb',
      initials: 'MR',
      color: 'bg-pink-500',
    },
    {
      quote: "The AI-powered task management is a game changer. Our team's productivity is up 60% and we spend way less time in status meetings. Can't imagine going back.",
      name: 'Emily Watson',
      role: 'Head of Product',
      company: 'Linear',
      initials: 'EW',
      color: 'bg-purple-500',
    },
    {
      quote: "We scaled from 10 to 200 people and Nexus scaled with us perfectly. The enterprise security features gave our compliance team peace of mind from day one.",
      name: 'David Kim',
      role: 'CTO',
      company: 'Vercel',
      initials: 'DK',
      color: 'bg-green-500',
    },
    {
      quote: "Onboarding new team members used to take weeks. With Nexus, they're up to speed in hours. The integrations with our existing tools made the transition seamless.",
      name: 'Priya Patel',
      role: 'Engineering Manager',
      company: 'Figma',
      initials: 'PP',
      color: 'bg-orange-500',
    },
    {
      quote: "Customer support is outstanding, but honestly we rarely need it. The platform is so intuitive that our whole team picked it up without any training.",
      name: 'Tom Hanks',
      role: 'Design Lead',
      company: 'Notion',
      initials: 'TH',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Loved by 2,000+ teams
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            See what industry leaders are saying about how Nexus transformed their workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role} @ {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
