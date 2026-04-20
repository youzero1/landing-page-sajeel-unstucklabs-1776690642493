'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'You can sign up and use all Pro features completely free for 14 days — no credit card required. At the end of your trial, you can choose to subscribe or downgrade to a free plan. Your data is always yours.',
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you get immediate access to the new features. When you downgrade, the change takes effect at the end of your current billing cycle.',
    },
    {
      question: 'How many team members can I invite?',
      answer: 'Starter plans support up to 10 members. Pro and Enterprise plans support unlimited team members. You can also add guests (external collaborators) to all plans.',
    },
    {
      question: 'What integrations do you support?',
      answer: 'We support 100+ integrations including GitHub, GitLab, Figma, Slack, Jira, Notion, Google Workspace, Microsoft 365, Salesforce, Zendesk, and many more. Enterprise customers can also request custom integrations.',
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use AES-256 encryption at rest and TLS 1.3 in transit. We are SOC 2 Type II certified, GDPR compliant, and HIPAA ready. Your data is stored in ISO 27001 certified data centers.',
    },
    {
      question: 'Do you offer discounts for nonprofits or startups?',
      answer: 'Yes! We offer a 50% discount for qualifying nonprofits and a special startup program for companies under 2 years old with fewer than 20 employees. Contact our sales team to learn more.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'All plans include email support with 24-hour response times. Pro plans get priority support with 4-hour response times. Enterprise plans include a dedicated customer success manager and 1-hour SLA.',
    },
    {
      question: 'Can I export my data if I decide to leave?',
      answer: 'Yes, always. You can export all your data at any time in industry-standard formats (JSON, CSV, PDF). We believe your data belongs to you and we make it easy to take it wherever you go.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Got a question? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 underline">
              Chat with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
