"use client"
import { useState } from "react";

export default function ContactFormPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    const res = await fetch("https://formspree.io/f/xrbkvqeg", { // <-- PUT YOUR FORMSPREE ENDPOINT HERE
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </main>
  );
} 