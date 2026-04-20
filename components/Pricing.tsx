'use client';

import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 12,
      annualPrice: 9,
      description: 'Perfect for small teams getting started.',
      features: [
        'Up to 10 members',
        '5 active projects',
        '10 GB storage',
        'Basic integrations',
        'Email support',
        '2 guests',
      ],
      notIncluded: ['Advanced analytics', 'Priority support', 'Custom domain'],
      cta: 'Start Free Trial',
      highlighted: false,
      gradient: '',
      border: 'border-white/10',
    },
    {
      name: 'Pro',
      monthlyPrice: 29,
      annualPrice: 22,
      description: 'Everything growing teams need to move fast.',
      features: [
        'Unlimited members',
        'Unlimited projects',
        '100 GB storage',
        '50+ integrations',
        'Priority support',
        'Unlimited guests',
        'Advanced analytics',
        'Custom domain',
      ],
      notIncluded: [],
      cta: 'Start Free Trial',
      highlighted: true,
      gradient: 'from-violet-600 to-purple-700',
      border: 'border-violet-500/50',
    },
    {
      name: 'Enterprise',
      monthlyPrice: 79,
      annualPrice: 59,
      description: 'Advanced security and control for large orgs.',
      features: [
        'Everything in Pro',
        'SSO / SAML',
        '1 TB storage',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Audit logs',
        'RBAC',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false,
      gradient: '',
      border: 'border-white/10',
    },
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass text-indigo-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            Pricing
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
            No hidden fees. No surprise charges. Choose the plan that fits your team.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center glass rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                !isAnnual ? 'bg-white text-gray-900 shadow-lg' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-white text-gray-900 shadow-lg' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Annual
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">Save 25%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-violet-600/20 to-purple-900/20 border-violet-500/50 shadow-2xl shadow-violet-900/30'
                  : 'glass'
              } ${
                plan.highlighted ? 'scale-[1.03] z-10' : ''
              }`}
            >
              {plan.highlighted && (
                <>
                  {/* Top glow */}
                  <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-violet-500/20 to-transparent pointer-events-none" />
                </>
              )}

              {plan.highlighted && (
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5 shadow-lg">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most Popular
                </div>
              )}

              <div className="text-xl font-bold mb-1 text-white">
                {plan.name}
              </div>
              <div className="text-sm mb-6 text-gray-400">
                {plan.description}
              </div>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-extrabold text-white">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm pb-2 text-gray-500">/mo per user</span>
              </div>

              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-xl mb-8 transition-all text-sm ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-violet-900/50'
                    : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                }`}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-2xl">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-sm text-gray-400">
              All plans include a <strong className="text-white">14-day free trial</strong> and a{' '}
              <strong className="text-white">30-day money-back guarantee</strong>. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
