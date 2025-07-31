'use client';

import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Shield, Zap, Brain } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-indigo-500" />,
    title: 'AI-Powered Campaigns',
    description: 'Leverage machine learning to optimize your ad performance and targeting in real-time.',
  },
  {
    icon: <Zap className="h-8 w-8 text-indigo-500" />,
    title: 'Automation at Scale',
    description: 'Automate everything from budget allocation to content generation effortlessly.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
    title: 'Deep Analytics',
    description: 'Gain real-time insights through intelligent dashboards tailored to your brand’s KPIs.',
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-500" />,
    title: 'Security & Compliance',
    description: 'All campaigns are GDPR-compliant and your data is encrypted end-to-end.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-indigo-500" />,
    title: 'Smart Recommendations',
    description: 'Our AI learns what works best for your audience and suggests improvements continuously.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#0f172a] text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose ADmyBRAND AI Suite?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
