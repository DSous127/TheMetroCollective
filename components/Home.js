import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black space-y-20">
      {/* Hero with Background Video */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video/hero-demo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Private Capital Meets Real Estate Vision</h1>
          <p className="text-lg max-w-2xl">The Metro Collective is a boutique consulting group helping investors and borrowers access smart, fast lending solutions.</p>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">Submit a Deal</button>
            <button className="border border-white px-6 py-3 rounded-lg text-white">Join as Investor</button>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Tailored Lending</h3>
            <p>We structure flexible capital solutions for unique commercial and residential real estate goals.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fast Access to Capital</h3>
            <p>Bridge loans and private funds delivered quickly to meet time-sensitive opportunities.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Advisory-Driven</h3>
            <p>We offer more than funding—we help our clients plan, analyze and close with confidence.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">About The Metro Collective</h2>
          <p className="text-gray-700">Founded by real estate professionals, The Metro Collective is an extension of Metro Mortgage Group, offering curated lending and consulting solutions for investors and developers. Our network spans private capital sources, brokers, and vetted borrowers seeking fast, structured deals.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have a project or lending inquiry? We'd love to hear from you.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
          <textarea placeholder="Message" className="w-full border p-3 rounded h-28" />
          <button className="bg-black text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} The Metro Collective · Powered by Metro Mortgage Group
      </footer>
    </div>
  );
}
