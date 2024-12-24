"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: "",
        }),
      });
      if (response) {
        setSubscribed(true);
      }
    } catch (error) {
      console.error("Subscription failed", error);
    }
  };
  return (
    <div
      style={{ background: "#f1f1ef" }}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
        <div
          style={{
            color: "#fd4b3d",
            fontWeight: 600,
            fontSize: 72,
            display: "flex",
            gap: 4,
            flexDirection: "column",
          }}
        >
          <div>Hello I&apos;m Hashir,</div>
          <div>Welcome to my emails project</div>
          <div>Subscribe to my email Newsletter</div>
        </div>

        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              style={{
                border: "1px solid #fd4b3d",
                padding: 16,
                borderRadius: "10%",
              }}
              type="submit"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600">
            Thanks for subscribing! Check your email.
          </div>
        )}
      </main>
    </div>
  );
}
