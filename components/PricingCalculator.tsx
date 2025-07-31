'use client';

import { useState } from 'react';

export default function PricingCalculator() {
  const [campaigns, setCampaigns] = useState(5);
  const [teamSize, setTeamSize] = useState(3);
  const [aiTools, setAiTools] = useState(2);

  const price = (campaigns * 10) + (teamSize * 8) + (aiTools * 15);

  return (
    <section className="px-6 py-20 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">💡 Interactive Pricing Calculator</h2>
        <p className="mb-8 text-gray-600">
          Customize your needs to estimate your monthly cost.
        </p>

        <div className="space-y-6 text-left">
          <div>
            <label className="block font-medium mb-2">📈 Campaigns per Month</label>
            <input
              type="range"
              min={1}
              max={50}
              value={campaigns}
              onChange={(e) => setCampaigns(Number(e.target.value))}
              className="w-full"
            />
            <p>{campaigns} Campaigns</p>
          </div>

          <div>
            <label className="block font-medium mb-2">👥 Team Members</label>
            <input
              type="range"
              min={1}
              max={20}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full"
            />
            <p>{teamSize} Members</p>
          </div>

          <div>
            <label className="block font-medium mb-2">🧠 AI Tools Needed</label>
            <input
              type="range"
              min={1}
              max={10}
              value={aiTools}
              onChange={(e) => setAiTools(Number(e.target.value))}
              className="w-full"
            />
            <p>{aiTools} Tools</p>
          </div>

          <div className="mt-8 text-center text-xl font-semibold">
            Estimated Price: <span className="text-indigo-600">${price} / month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
