import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">The Metro Collective</h1>
        <p className="text-lg text-gray-700">Real Estate Lending Consultants</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">Submit a Deal</button>
          <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg">Join as an Investor</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">For Borrowers</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Submit your loan request</li>
            <li>We structure the deal</li>
            <li>Get matched with a private lender</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">For Investors</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Join our deal list</li>
            <li>Receive exclusive lending opportunities</li>
            <li>Fund short-term, secured loans</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>Interested in learning more? Send us a message or request a deal intake form.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" className="w-full border p-2 rounded h-24" />
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Submit</button>
        </form>
      </section>
    </div>
  );
}
