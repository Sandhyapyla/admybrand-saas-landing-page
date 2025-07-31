// components/Footer.tsx
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">ADmyBRAND</h3>
          <p>Empowering brands with AI-driven marketing automation and insights.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="hover:text-white" /></a>
            <a href="#"><Twitter className="hover:text-white" /></a>
            <a href="#"><Instagram className="hover:text-white" /></a>
            <a href="#"><Linkedin className="hover:text-white" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </footer>
  );
}
