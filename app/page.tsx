"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Card from "./components/Card";
import Link from "next/link";
import { Wifi, Signal, ShieldCheck, Router } from "lucide-react";

export default function Home() {
  const messages = [
    "Ultra-fast internet across Kenya",
    "Call our agent on 0103338340 any time",
    "Now place your order and Boom 🚀",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen text-black">

      <Header />

      {/* HERO */}
      <section className="bg-black text-white text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-yellow-500">
          Airtel 5G Smart Connect
        </h1>

        <p className="mt-4 text-lg transition-all duration-500">
          {messages[index]}
        </p>

        
         {/* Microsoft Form Button */}
    <a
      href="https://forms.office.com/Pages/ResponsePage.aspx?id=JzfHFpyXgk2zp-tqL93-V1fdJne7SIlMnh7yZpkW8f5UQzU1TjNRSjJWNFJaUzNBNVo5S1BXQ0lINi4u&origin=Invitation&channel=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
        Click to Oder Now
      </button>
    </a>
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <img src="/device.png" className="w-72 mx-auto" />

          <h2 className="text-2xl font-bold text-center">
            5G Outdoor Unit
          </h2>

          <Card><Row icon={<ShieldCheck />} text="Weather resistant" /></Card>
          <Card><Row icon={<Signal />} text="High gain antenna" /></Card>
          <Card><Row icon={<Wifi />} text="Signal boost" /></Card>

          <h3 className="text-xl font-bold mt-6">Package Items</h3>

          <div className="grid grid-cols-2 gap-4">
            <Item title="Router" icon={<Router />} />
            <Item title="Antenna" icon={<Signal />} />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* HOW TO ORDER */}
          <div className="bg-black text-white p-6 rounded-2xl border border-yellow-500">
            <h2 className="text-center text-xl font-bold text-yellow-500 mb-6">
              How to Order
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">

              <Step
                number="1"
                text="Choose your preferred package below"
              />

              <Step
                number="2"
                text="Fill in your details and installation preferences"
              />

              <Step
                number="3"
                text="Submit your request and our technician will contact you"
              />

            </div>
          </div>

                {/* PACKAGES */}
        <div className="grid grid-cols-2 gap-4">

          {/* STANDARD */}
          <div className="bg-black text-white rounded-xl p-5 shadow-lg">
            <p className="font-bold text-lg">Standard</p>
            <p className="text-2xl font-bold mt-1">Ksh 1,999</p>
            <p className="text-sm mt-1">15 Mbps</p>
             <p className="text-sm mt-1">Installation  1000/=</p>

            <Link href="/order">
              <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-semibold">
                Select Package
              </button>
            </Link>
          </div>

          {/* PREMIUM */}
          <div className="bg-yellow-500 text-black rounded-xl p-5 shadow-lg">
            <p className="font-bold text-lg">Premium</p>
            <p className="text-2xl font-bold mt-1">Ksh 2,999</p>
            <p className="text-sm mt-1">30 Mbps</p>
            <p className="text-sm mt-1">Installation  1000/=</p>

            <Link href="/order">
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold">
                Select Package
              </button>
            </Link>
          </div>

        </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

/* COMPONENTS */
function Row({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Item({ title, icon }: any) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        {icon}
        <p className="mt-2">{title}</p>
      </div>
    </Card>
  );
}

function Step({ number, text }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold mb-3">
        {number}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}