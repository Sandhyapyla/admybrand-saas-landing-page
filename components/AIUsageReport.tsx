'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', usage: 50 },
  { month: 'Feb', usage: 80 },
  { month: 'Mar', usage: 65 },
  { month: 'Apr', usage: 120 },
  { month: 'May', usage: 150 },
  { month: 'Jun', usage: 200 },
  { month: 'Jul', usage: 250 },
];

export default function AIUsageReport() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-24 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Usage Report</h2>
        <p className="text-gray-300 mb-8">
          Track how your team leverages AI tools over time to optimize performance.
        </p>

        <div className="h-72 bg-white rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="#000" />
              <YAxis stroke="#000" />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#4f46e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

