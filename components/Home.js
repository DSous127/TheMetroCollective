import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Smart Real Estate Lending Starts Here</h1>
        <p className="text-lg text-gray-600 mt-2">We connect borrowers with private capital—fast, flexible, and secure.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg">Submit a Deal</button>
          <button className="border border-blue-800 text-blue-800 px-6 py-3 rounded-lg">Join as an Investor</button>
        </div>
      </section>

      {/* Trust Icons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <img src="/icons/shield.svg" alt="Verified" className="mx-auto w-12 h-12" />
          <p className="mt-2 font-semibold text-gray-800">Verified Lending</p>
        </div>
        <div>
          <img src="/icons/clock.svg" alt="Fast Funding" className="mx-auto w-12 h-12" />
          <p className="mt-2 font-semibold text-gray-800">Fast Turnaround</p>
        </div>
        <div>
          <img src="/icons/handshake.svg" alt="Matchmaking" className="mx-auto w-12 h-12" />
          <p className="mt-2 font-semibold text-gray-800">Investor Matched</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-700">Submit your request or inquiry and we’ll get back to you promptly.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" className="w-full border p-2 rounded h-24" />
          <button className="bg-blue-800 text-white px-6 py-2 rounded">Send Message</button>
        </form>
      </section>
    </div>
  );
}
