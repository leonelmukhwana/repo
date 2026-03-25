import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: "Airtel 5G Smart Connect",
  description: "Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}