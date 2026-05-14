"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-[14px] px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#245CFF] transition-colors duration-200";

  if (submitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-[#245CFF] rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>Zpráva odeslána!</h3>
        <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          Děkujeme za váš zájem. Ozveme se vám do 24 hodin.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 md:p-8"
    >
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jméno a příjmení"
          required
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefonní číslo"
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Předmět zprávy"
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Vaše zpráva"
        required
        rows={5}
        className={`${inputClass} resize-none mb-4`}
        style={{ fontFamily: "var(--font-body)" }}
      />

      {/* Consent */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <div className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="sr-only"
          />
          <div className={`w-4 h-4 border rounded transition-all duration-200 flex items-center justify-center ${form.consent ? "bg-[#245CFF] border-[#245CFF]" : "border-white/20 bg-transparent"}`}>
            {form.consent && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          Souhlasím se zpracováním osobních údajů dle{" "}
          <a href="#" className="text-[#245CFF] underline">zásad ochrany osobních údajů</a>.
        </span>
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!form.consent || loading}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#245CFF] text-white text-sm font-bold rounded-full uppercase tracking-wider transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.5)] hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Odesílám...
            </>
          ) : (
            <>
              ODESLAT ZPRÁVU
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
