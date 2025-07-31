'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = {
  monthly: [
    {
      title: 'Starter',
      price: '₹999',
      features: ['Basic AI Campaigns', 'Email Support', '1 Brand'],
    },
    {
      title: 'Pro',
      price: '₹2999',
      features: ['All Starter Features', 'A/B Testing', 'Up to 5 Brands'],
    },
    {
      title: 'Enterprise',
      price: '₹9999',
      features: ['All Pro Features', 'Dedicated AI Assistant', 'Unlimited Brands'],
    },
  ],
  yearly: [
    {
      title: 'Starter',
      price: '₹9,999',
      features: ['Basic AI Campaigns', 'Email Support', '1 Brand'],
    },
    {
      title: 'Pro',
      price: '₹29,999',
      features: ['All Starter Features', 'A/B Testing', 'Up to 5 Brands'],
    },
    {
      title: 'Enterprise',
      price: '₹99,999',
      features: ['All Pro Features', 'Dedicated AI Assistant', 'Unlimited Brands'],
    },
  ]
};

const PricingSection = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 px-6 bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Flexible Plans for Every Brand</h2>
        <div className="mb-10">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${billing === 'monthly' ? 'bg-indigo-600' : 'bg-gray-700'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${billing === 'yearly' ? 'bg-indigo-600' : 'bg-gray-700'}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {pricingPlans[billing].map((plan, idx) => (
            <div key={idx} className="bg-[#0f172a] rounded-2xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-300 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-green-400" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
