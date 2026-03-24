"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-3">
            Authorized Airtel Agent
            
          </h2>
          <p className="text-sm text-gray-300">
            High-speed 5G internet across Kenya.
          </p>

          <p className="mt-4 text-sm">Customer Support 📞 0733 100 000</p>
          <p className="mt-2 text-sm">Customer Care 📞 100</p>
          <p className="mt-2 text-sm">Website: www.airtelkenya.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/order">Order</Link></li>
            <li><Link href="/thank-you">Status</Link></li>
            <li><Link href="/troubleshoot">Help</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-3">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-4">
        © 2026 Airtel Agent
      </div>

    </footer>
  );
}