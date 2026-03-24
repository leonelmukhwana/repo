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
      package: pkg,                  // ✅ Package type included
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), formData);

      // Redirect to thank-you page
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

      <div className="bg-black text-white py-12 text-center">
        <h1 className="text-3xl font-bold text-yellow-500">
          Airtel 5G Installation Request
        </h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
        {/* PACKAGE */}
        <div className="mb-6">
          <p className="font-semibold mb-3">Choose Package</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setPkg("standard")}
              className={`p-4 border rounded-lg ${pkg === "standard" ? "bg-black text-white" : ""}`}
            >
              Standard - Ksh 1,999
            </button>
            <button
              type="button"
              onClick={() => setPkg("premium")}
              className={`p-4 border rounded-lg ${pkg === "premium" ? "bg-black text-white" : ""}`}
            >
              Premium - Ksh 2,999
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input name="fullName" required placeholder="Full Name" className="border p-3 rounded-lg col-span-2" />
          <input name="phone" required placeholder="Primary Phone" className="border p-3 rounded-lg" />
          <input name="altPhone" placeholder="Alternative Phone" className="border p-3 rounded-lg" />
          <input name="email" required type="email" placeholder="Email" className="border p-3 rounded-lg col-span-2" />
          <input name="town" required placeholder="Town" className="border p-3 rounded-lg" />
          <input name="landmark" required placeholder="Landmark" className="border p-3 rounded-lg" />
          <input name="date" required type="date" className="border p-3 rounded-lg" />

          <select name="time" required className="border p-3 rounded-lg">
            <option value="">Preferred Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          <div className="col-span-2 flex items-center gap-4">
            <button type="button" onClick={() => setDevices(Math.max(1, devices - 1))}>-</button>
            <span>{devices}</span>
            <button type="button" onClick={() => setDevices(devices + 1)}>+</button>
          </div>

          <button
            disabled={loading}
            className="col-span-2 bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}