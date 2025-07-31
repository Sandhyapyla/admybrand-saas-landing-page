'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/20 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="text-xl font-bold">ADmyBRAND</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
