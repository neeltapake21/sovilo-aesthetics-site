import { FormEvent, useState } from "react";

// TODO: replace with your deployed Apps Script web app URL
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw11viY74v9acwnyYvK1I0vSK3Xl10OobMG6CLWNVuBzNUrN9RUFbIpSsSBGZxki1TOiQ/exec";

export function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("name", String(formData.get("name") ?? ""));
    params.set("phone", String(formData.get("phone") ?? ""));
    params.set("concern", String(formData.get("concern") ?? ""));
    params.set("preferredDate", String(formData.get("date") ?? ""));
    params.set("source", "website_contact_form");
    params.set("createdAt", new Date().toISOString());

    try {
      setSubmitting(true);
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!res.ok) {
        throw new Error("Could not save. Please try again or call the clinic.");
      }

      setMessage("Thank you! Your appointment request has been recorded. We will contact you soon.");
      e.currentTarget.reset();
      setAgreed(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call the clinic."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="container-xl py-16">
        <h1 className="font-heading text-3xl font-bold text-charcoal">
          Contact Us &amp; Book Your Appointment
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-gray-600">
          Share a few basic details and our team will reach out to confirm your appointment.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl rounded-3xl bg-soft-gray px-6 py-8 shadow-card"
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
                placeholder="10-digit mobile number"
              />
              <p className="mt-1 text-xs text-gray-500">We&apos;ll use this to confirm your visit.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal">
                What would you like to enhance or improve?
              </label>
              <textarea
                name="concern"
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
                placeholder="Example: acne scars, hair fall, weight loss, anti-aging..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal">
                Preferred Date of Visit <span className="text-primary">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="agree"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="agree" className="text-xs text-gray-600">
                I understand that this is an appointment request and the clinic team will confirm the
                exact date and time over phone or WhatsApp.
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed || submitting}
              className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow disabled:cursor-not-allowed disabled:bg-primary/60"
            >
              {submitting ? "Submitting..." : "Submit Appointment Request"}
            </button>

            {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}


