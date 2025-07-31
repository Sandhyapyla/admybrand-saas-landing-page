'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      console.log('Submitted:', form);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        We&apos;d love to hear from you. Let&apos;s connect!
      </p>

      {submitted ? (
        <p className="text-center text-green-600 text-lg">
          Thanks for reaching out! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
