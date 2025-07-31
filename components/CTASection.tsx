// components/CTASection.tsx
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-[#1e293b] text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to boost your marketing with AI?</h2>
      <p className="text-lg text-gray-300 mb-8">
        Start your free trial today. No credit card required.
      </p>
      <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-medium">
        Get Started Free <ArrowRight className="ml-2" />
      </button>
    </section>
  );
}
