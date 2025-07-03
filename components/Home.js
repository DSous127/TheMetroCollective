import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black space-y-24">
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video/hero-temp.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Capital. Connections. Confidence.</h1>
          <p className="text-xl mt-4 max-w-2xl">Boutique lending consultancy bridging private capital with real estate ambition.</p>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">Submit a Deal</button>
            <button className="border border-white text-white px-6 py-3 rounded-md">Investor Access</button>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#002b5c]">Curated Lending</h3>
            <p>Tailored capital solutions built for residential, commercial and investment goals.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#002b5c]">Speed & Strategy</h3>
            <p>Bridge financing with purpose — fast execution and expert structuring.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#002b5c]">Discreet & Vetted</h3>
            <p>We screen every file for risk and alignment — and connect only quality opportunities.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">About Metro Collective</h2>
          <p className="text-gray-700">Metro Collective is the consulting and private capital arm of Metro Mortgage Group — built to support investors, developers and buyers with access to boutique, short-term financing backed by strategic expertise and a national network.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Forward-Looking Firms</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 grayscale">
          <img src="/logos/client1.png" alt="Client 1" className="h-12" />
          <img src="/logos/client2.png" alt="Client 2" className="h-12" />
          <img src="/logos/client3.png" alt="Client 3" className="h-12" />
          <img src="/logos/client4.png" alt="Client 4" className="h-12" />
        </div>
      </section>

      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">Submit your inquiry or deal opportunity. We’ll respond promptly.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
          <textarea placeholder="Message" className="w-full border p-3 rounded h-28" />
          <button className="bg-[#002b5c] text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </section>

      <footer className="bg-[#002b5c] text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} The Metro Collective · Powered by Metro Mortgage Group
      </footer>
    </div>
  );
}
