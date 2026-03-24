"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SimpleVoiceAssistant() {
  const pathname = usePathname();

  const speak = (text: string) => {
    if (typeof window === "undefined") return;

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }

    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleSpeak = () => {
      let message = "";

      if (pathname === "/") {
        message =
          "Welcome to our website. We are proud to have you. Feel free to explore our services.";
      } else if (pathname.includes("troubleshoot")) {
        message =
          "Incase of any issue You can call our Authorized agent on 0103338340 or customer care on 100 for any assistance.";
      } else if (pathname.includes("order")) {
        message =
          "For Installation Request Just choose the Package you wantand  fill in the details correctly and submit and in no time you will have  a fast internet at your home.";
      } else {
        message =
          "Welcome. Feel free to explore. We are here to help you anytime.";
      }

      speak(message);
    };

    // 🔑 Wait for first user interaction
    window.addEventListener("click", handleSpeak, { once: true });

    return () => {
      window.removeEventListener("click", handleSpeak);
    };
  }, [pathname]);

  return null;
}