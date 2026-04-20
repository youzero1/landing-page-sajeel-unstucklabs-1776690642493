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
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Simple, transparent pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            No hidden fees. No surprise charges. Choose the plan that fits your team.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 25%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700 shadow-2xl scale-105'
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-1 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⭐ Most Popular
                </div>
              )}

              <div className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </div>
              <div className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </div>

              <div className="flex items-end gap-2 mb-8">
                <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm pb-2 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>/mo per user</span>
              </div>

              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-full mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:opacity-90 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 opacity-50">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a <strong className="text-gray-900">14-day free trial</strong> and a{' '}
            <strong className="text-gray-900">30-day money-back guarantee</strong>. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
