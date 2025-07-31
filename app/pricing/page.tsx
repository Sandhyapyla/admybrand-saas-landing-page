export default function PricingPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Starter", price: "$0", features: ["Basic Campaign Tools", "Email Support"] },
          { title: "Pro", price: "$49/mo", features: ["Advanced Analytics", "Priority Support", "A/B Testing"] },
          { title: "Enterprise", price: "Custom", features: ["Dedicated AI Models", "24/7 Support", "Custom Integrations"] },
        ].map((plan) => (
          <div key={plan.title} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx} className="text-sm">✅ {f}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
