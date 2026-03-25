"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Order() {
  const router = useRouter();
  const [devices, setDevices] = useState(1);
  const [pkg, setPkg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!pkg) {
      alert("Please select a package");
      return;
    }

    setLoading(true);

    const formData = {
      fullName: e.target.fullName.value,
      phone: e.target.phone.value,
      altPhone: e.target.altPhone.value,
      email: e.target.email.value,
      town: e.target.town.value,
      landmark: e.target.landmark.value,
      date: e.target.date.value,
      time: e.target.time.value,
      devices,
      package: pkg,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), formData);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to submit request");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* HEADER */}
      <div className="bg-black text-white py-10 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-yellow-500 px-4">
          Airtel 5G Installation Request
        </h1>
      </div>

      {/* FORM CONTAINER */}
      <div className="px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-5 sm:p-8 mt-6 sm:mt-10">

          {/* PACKAGE */}
          <div className="mb-6">
            <p className="font-semibold mb-3">Choose Package</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPkg("standard")}
                className={`p-4 border-2 rounded-lg transition ${
                  pkg === "standard"
                    ? "bg-black text-white border-black"
                    : "border-gray-400"
                }`}
              >
                Standard - Ksh 1,999
              </button>

              <button
                type="button"
                onClick={() => setPkg("premium")}
                className={`p-4 border-2 rounded-lg transition ${
                  pkg === "premium"
                    ? "bg-black text-white border-black"
                    : "border-gray-400"
                }`}
              >
                Premium - Ksh 2,999
              </button>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

            {/* FULL NAME */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="fullName"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-1">Primary Phone</label>
              <input
                name="phone"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* ALT PHONE */}
            <div>
              <label className="block text-sm font-medium mb-1">Alternative Phone</label>
              <input
                name="altPhone"
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* EMAIL */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* TOWN */}
            <div>
              <label className="block text-sm font-medium mb-1">Town</label>
              <input
                name="town"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* LANDMARK */}
            <div>
              <label className="block text-sm font-medium mb-1">Landmark</label>
              <input
                name="landmark"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm font-medium mb-1">Installation Date</label>
              <input
                name="date"
                type="date"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* TIME */}
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Time</label>
              <select
                name="time"
                required
                className="border border-gray-400 bg-white p-3 rounded-lg w-full outline-none focus:border-black focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            {/* DEVICES */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setDevices(Math.max(1, devices - 1))}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                -
              </button>

              <span className="text-lg font-semibold">{devices}</span>

              <button
                type="button"
                onClick={() => setDevices(devices + 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>

            {/* SUBMIT */}
            <button
              disabled={loading}
              className="col-span-1 md:col-span-2 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}