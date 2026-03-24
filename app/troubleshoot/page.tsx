"use client";

import { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Card from "../components/Card";

type Step = {
  text: string;
  image?: string;
};

export default function Troubleshooting() {
  const [active, setActive] = useState<{
    type: "guide" | "issue";
    index: number;
  } | null>(null);

  // =========================
  // 🔝 REFERENCE GUIDES (TOP)
  // =========================
  const guides = [
    {
      title: "🔑 Default Login Details",
      description: "Admin username, password & router access",
      problems: [
        {
          heading: "Login Credentials",
          steps: [
            { text: "Username: admin" },
            { text: "Password: admin" },
            { text: "Login IP: 192.168.1.1" },
            { text: "Mobile App: TZLink" },
            {
              text: "All details are printed at the back label",
              image: "/images/router-back-details.avif",
            },
          ],
        },
      ],
    },

    {
      title: "📋 Technical Specifications",
      description: "Router & antenna specs",
      problems: [
        {
          heading: "Outdoor Unit (Antenna)",
          steps: [
            { text: "Temperature: -30°C to +60°C" },
            { text: "Humidity: 5% to 95%" },
            { text: "Weight: ~600g" },
          ],
        },
        {
          heading: "Indoor Unit (Router)",
          steps: [
            { text: "Temperature: 0°C to +40°C" },
            { text: "Power: DC 12V/2A" },
            { text: "Weight: 470g" },
          ],
        },
      ],
    },

    {
      title: "💡 LED Indicators Guide",
      description: "Understand router and antenna lights",
      problems: [
        {
          heading: "Router LED",
          steps: [
            { text: "Red = Booting", image: "/images/router-red-light.avif" },
            { text: "Purple = Booting", image: "/images/router-gradient-light.avif" },
            { text: "Blue = Connecting", image: "/images/router-blue-light.avif" },
            { text: "Green = Ready", image: "/images/router-green-light.avif" },
          ],
        },
        {
          heading: "Signal Strength",
          steps: [
            { text: "Green = Excellent", image: "/images/antenna-green-signal.avif" },
            { text: "Orange = Medium", image: "/images/antenna-orange-signal.avif" },
            { text: "Red = Poor", image: "/images/antenna-red-signal.avif" },
          ],
        },
      ],
    },

    {
      title: "🏷️ Device Label Info",
      description: "Find WiFi passwords & details",
      problems: [
        {
          heading: "Back Label Contains",
          steps: [
            { text: "WiFi SSID & Password" },
            { text: "Admin username & password" },
            { text: "IP Address" },
            {
              text: "See label example",
              image: "/images/router-back-details.jpg",width:50,height:300,
            },
          ],
        },
      ],
    },

    {
      title: "🔄 Factory Reset Guide",
      description: "Reset router to default settings",
      problems: [
        {
          heading: "Steps",
          steps: [
            {
              text: "Open antenna screws",
              image: "/images/antenna-bottom-screws.avif",
            },
            {
              text: "Locate reset button",
              image: "/images/antenna-reset-button.avif",
            },
            { text: "Hold using pin" },
            { text: "Wait 2-3 minutes" },
          ],
        },
      ],
    },

    {
      title: "🔌 Router Ports",
      description: "Understand connections",
      problems: [
        {
          heading: "Ports",
          steps: [
            {
              text: "WAN (W/LAN1) connects antenna",
              image: "/images/router-wlan-port.avif",
            },
            { text: "LAN ports connect devices" },
            { text: "USB for data/power" },
          ],
        },
      ],
    },

    {
      title: "📱 SIM Installation",
      description: "Insert SIM correctly",
      problems: [
        {
          heading: "Steps",
          steps: [
            {
              text: "Open antenna bottom",
              image: "/images/sim-open.jpg",
            },
            {
              text: "Insert SIM correctly",
              image: "/images/sim-orientation.jpg",
            },
            {
              text: "Push until it clicks",
              image: "/images/sim-insert.jpg",
            },
          ],
        },
      ],
    },

    {
      title: "📲 NFC OneHop",
      description: "Connect WiFi without password",
      problems: [
        {
          heading: "Steps",
          steps: [
            { text: "Enable NFC on phone" },
            { text: "Tap router NFC area" },
            { text: "Click connect" },
          ],
        },
      ],
    },

    {
      title: "⚙️ Access Router Settings",
      description: "Login to admin panel",
      problems: [
        {
          heading: "Steps",
          steps: [
            { text: "Connect to WiFi" },
            { text: "Go to 192.168.1.1" },
            { text: "Login admin/admin" },
          ],
        },
      ],
    },

    {
      title: "🔐 Find WiFi Password",
      description: "Recover or reset password",
      problems: [
        {
          heading: "Methods",
          steps: [
            { text: "Check router label" },
            { text: "Login to admin panel" },
            { text: "Factory reset if needed" },
          ],
        },
      ],
    },
  ];

  // =========================
  // 🔧 TROUBLESHOOTING
  // =========================
  const issues = [
  {
    title: "📶 No Signal or Weak Signal",
    description: "Device shows red/orange signal LED",
    problems: [
      {
        heading: "📶 No Signal (Red LED)",
        steps: [
          { text: "Check SIM card installation in antenna." },
          { text: "Ensure SIM has active Airtel data plan." },
          { text: "Position antenna facing nearest Airtel tower." },
          { text: "Move antenna to higher location (rooftop)." },
          { text: "Remove obstructions like trees/buildings." },
          { text: "Ensure area has Airtel coverage." },
          {
            text: "Connect ethernet cable to WAN/W/LAN1 port (not LAN).",
            image: "/images/wan-port.jpg",
          },
          { text: "Check ETH LED (should be ON or flashing)." },
          { text: "Check power LED on outdoor unit." },
          { text: "Ensure 4G/5G LEDs are ON." },
        ],
      },
      {
        heading: "📶 Weak Signal (Orange LED)",
        steps: [
          { text: "Reposition antenna toward tower." },
          { text: "Install antenna higher (rooftop best)." },
          { text: "Remove walls or metal blocking signal." },
          { text: "Ensure antenna is firmly mounted." },
          {
            text: "Check WAN cable connection.",
            image: "/images/wan-port.jpg",
          },
          { text: "Verify power LED is ON." },
        ],
      },
    ],
  },

  {
    title: "🐌 Slow Internet Speed",
    description: "Internet slower than expected",
    problems: [
      {
        heading: "🐌 Fix Slow Speed",
        steps: [
          { text: "Check signal strength (avoid red/orange LED)." },
          { text: "Verify data bundle is active." },
          { text: "Reduce connected devices." },
          { text: "Move closer to router." },
          { text: "Stop background downloads." },
          { text: "Restart router (wait 30 seconds)." },
          { text: "Avoid peak hours (evenings)." },
        ],
      },
    ],
  },

  {
    title: "📡 WiFi Connection Issues",
    description: "Cannot connect or disconnecting",
    problems: [
      {
        heading: "📡 Cannot Connect to WiFi",
        steps: [
          { text: "Check WiFi password (see router label)." },
          { text: "Ensure router LED is green." },
          { text: "Restart your device." },
          { text: "Forget and reconnect WiFi." },
          { text: "Move closer to router." },
          { text: "Select correct SSID (2.4G or 5G)." },
        ],
      },
      {
        heading: "📡 WiFi Disconnecting",
        steps: [
          { text: "Move closer to router." },
          { text: "Reduce interference." },
          { text: "Update WiFi drivers (PC)." },
          { text: "Restart router." },
          { text: "Disconnect unused devices." },
        ],
      },
    ],
  },

  {
    title: "📱 SIM Card Issues",
    description: "SIM not detected",
    problems: [
      {
        heading: "📱 SIM Not Detected",
        steps: [
          { text: "Reinsert SIM correctly." },
          { text: "Clean SIM with dry cloth." },
          { text: "Ensure SIM has Airtel data." },
          { text: "Test SIM in phone." },
          { text: "Check SIM slot for damage." },
        ],
      },
    ],
  },

  {
    title: "⚙️ Configuration & Setup",
    description: "Router access issues",
    problems: [
      {
        heading: "⚙️ Cannot Access Router",
        steps: [
          { text: "Connect to router WiFi first." },
          { text: "Go to 192.168.1.1" },
          { text: "Login admin / admin" },
          { text: "Try TZLink app." },
          { text: "Clear browser cache." },
          { text: "Factory reset if password forgotten." },
        ],
      },
      {
        heading: "🔐 Forgot WiFi Password",
        steps: [
          { text: "Check router label." },
          { text: "Login to admin panel." },
          { text: "Factory reset if needed." },
        ],
      },
    ],
  },

  {
    title: "🔄 Resubscribe / Renew Data",
    description: "Internet stopped working",
    problems: [
      {
        heading: "🔄 Renew Data Plan",
        steps: [
          { text: "Dial *400# (Airtel line required)." },
          { text: "Use My Airtel App (no Airtel line needed)." },
          { text: "Wait a few minutes after payment." },
          { text: "Restart router if still no internet." },
          { text: "Call support: 0733 100 500." },
        ],
      },
    ],
  },

  {
    title: "🔌 Power & Boot Issues",
    description: "Router not powering or stuck",
    problems: [
      {
        heading: "🔌 Device Not Turning On",
        steps: [
          { text: "Check power adapter connection." },
          { text: "Try different socket." },
          { text: "Inspect power cable." },
          { text: "Check if any LED is on." },
          { text: "Verify correct voltage." },
        ],
      },
      {
        heading: "🔴 LED Stuck on Red",
        steps: [
          { text: "Unplug and wait 30 seconds." },
          { text: "Check correct power rating." },
          {
            text: "Ensure WAN cable is connected properly.",
            image: "/images/wan-port.jpg",
          },
          { text: "Check outdoor power LED." },
          { text: "Check ETH LED connection." },
          { text: "Contact support if issue persists." },
        ],
      },
    ],
  },
];
  const data =
    active?.type === "guide" ? guides[active.index] : issues[active?.index || 0];

  return (
    <div className="bg-white min-h-screen text-black">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* ===================== */}
        {/* 🔝 REFERENCE SECTION */}
        {/* ===================== */}
        <div>
          <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
            Router Setup & Reference Guide
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {guides.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive({ type: "guide", index })}
                className="cursor-pointer"
              >
                <Card>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* 🔧 TROUBLESHOOT */}
        {/* ===================== */}
        <div>
          <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
            Troubleshooting
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {issues.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive({ type: "issue", index })}
                className="cursor-pointer"
              >
                <Card>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* 📖 DISPLAY */}
        {/* ===================== */}
        {active && (
          <Card>
            <h2 className="font-bold text-xl mb-4 text-red-600">
              {data.title}
            </h2>

            {data.problems.map((problem, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-semibold mb-3">
                  {problem.heading}
                </h3>

                <ul className="space-y-4 text-sm">
                  {problem.steps.map((step: Step, j: number) => (
                    <li key={j}>
                      <div className="flex gap-2">
                        <span className="text-red-600">✔</span>
                        <p>{step.text}</p>
                      </div>

                      {step.image && (
                        <img
                          src={step.image}
                          className="mt-2 rounded-lg shadow w-full max-h-60 object-cover"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}