import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — CarSnap",
  description: "How to request deletion of your CarSnap account and all associated data.",
};

const STEPS = [
  {
    number: "01",
    title: "Send a deletion request",
    description: (
      <>
        Email us at{" "}
        <a href="mailto:support.carsnaptcg@gmail.com" className="text-cs-cyan hover:underline font-medium">
          support.carsnaptcg@gmail.com
        </a>{" "}
        with the subject line <strong className="text-cs-text">Account Deletion Request</strong>.
        Include the email address associated with your CarSnap account so we can locate your data.
      </>
    ),
  },
  {
    number: "02",
    title: "Identity verification",
    description:
      "We will reply within 2 business days to verify your identity. This step protects your account from being deleted by someone else. We may ask you to confirm details visible in your profile.",
  },
  {
    number: "03",
    title: "Deletion processed",
    description:
      "Once verified, we will permanently delete your account and all associated personal data within 30 days. You will receive a confirmation email when the deletion is complete.",
  },
];

const DELETED_ITEMS = [
  "Account profile (name, email, profile picture)",
  "All captured cars and generated cards",
  "Battle history and match records",
  "Deck configurations",
  "Achievements, XP, and level progress",
  "In-game wallet balances",
  "Daily challenge and streak data",
  "Friend connections and social data",
];

const RETAINED_ITEMS = [
  "Anonymised, aggregated gameplay statistics that cannot be linked back to you",
  "Records required for legal, audit, or fraud-prevention obligations",
];

export default function DeleteAccountPage() {
  return (
    <div className="pt-24 pb-20 px-5 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Account</p>
          <h1 className="text-4xl font-black tracking-tight">Delete Your Account</h1>
          <p className="mt-3 text-cs-muted text-sm max-w-lg">
            You can request deletion of your CarSnap account and all associated personal data at any time.
            Please read the steps below carefully.
          </p>
        </div>

        {/* Coming-soon banner */}
        <div
          className="flex items-start gap-4 p-5 rounded-[14px] border mb-12"
          style={{
            borderColor: "rgba(34,211,238,0.3)",
            background: "rgba(34,211,238,0.06)",
          }}
        >
          <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#22D3EE" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#22D3EE" }}>In-app deletion coming soon</p>
            <p className="text-sm text-cs-muted mt-1">
              A one-tap account deletion button will be available in a future app update. Until then, please
              use the manual process below.
            </p>
          </div>
        </div>

        {/* Steps */}
        <section className="mb-14">
          <h2 className="text-2xl font-black tracking-tight mb-8">How to request deletion</h2>

          <div className="flex flex-col gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                {/* Number column */}
                <div className="shrink-0 flex flex-col items-center">
                  <span
                    className="text-3xl font-black font-mono leading-none"
                    style={{
                      background: "linear-gradient(135deg, #D61F19, #FF5550)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="mt-3 flex-1 w-px bg-cs-border/40" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3 className="text-lg font-bold text-cs-text mb-2">{step.title}</h3>
                  <p className="text-sm text-cs-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What gets deleted */}
        <section className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-6">What gets deleted</h2>
          <div
            className="p-6 rounded-[14px] border border-cs-border/60"
            style={{ background: "rgba(11,18,32,0.8)" }}
          >
            <ul className="space-y-3">
              {DELETED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cs-muted">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-cs-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What is retained */}
        <section className="mb-12">
          <h2 className="text-2xl font-black tracking-tight mb-6">What may be retained</h2>
          <div
            className="p-6 rounded-[14px] border border-cs-border/60"
            style={{ background: "rgba(11,18,32,0.8)" }}
          >
            <ul className="space-y-3">
              {RETAINED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cs-muted">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-cs-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div
          className="p-6 rounded-[14px] border border-cs-border/60 text-center"
          style={{ background: "rgba(11,18,32,0.8)" }}
        >
          <p className="text-sm text-cs-muted mb-4">Ready to proceed? Send your request to:</p>
          <a
            href="mailto:support.carsnaptcg@gmail.com?subject=Account%20Deletion%20Request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support.carsnaptcg@gmail.com
          </a>
          <p className="mt-4 text-xs text-cs-muted/50">
            For questions about your data, also see our{" "}
            <Link href="/privacy" className="text-cs-cyan hover:underline">Privacy Policy</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
