"use client";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Status() {
  return (
    <div className="bg-white min-h-screen">

      <Header />

      <div className="max-w-3xl mx-auto p-10 text-center">

        <h1 className="text-3xl font-bold text-yellow-500">
          Thank You!
        </h1>

        <p className="mt-3">
          Your request has been submitted successfully
        </p>

        <div className="border p-6 rounded-lg mt-6">
          Technician will contact you within 24–48 hours
        </div>

        <div className="border p-6 rounded-lg mt-6">
          📞 010 333 8340
        </div>

      </div>

      <Footer />
    </div>
  );
}