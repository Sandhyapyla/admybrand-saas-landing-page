'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white sticky top-0 z-50 shadow-md">
      <div className="text-xl font-bold">ADmyBRAND</div>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/pricing" className="hover:underline">Pricing</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
