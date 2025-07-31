// components/TestimonialsSection.tsx
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    feedback: 'ADmyBRAND AI Suite helped us grow our leads by 250% in 3 months!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Rahul Mehta',
    feedback: 'The automation and targeting tools are next-level. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Anita Desai',
    feedback: 'A must-have for any marketing team serious about scaling fast.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-24 bg-[#0f172a]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <div className="flex text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
