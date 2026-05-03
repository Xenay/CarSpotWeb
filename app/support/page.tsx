import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — CarSnap",
  description: "Get help with CarSnap — contact our support team for issues, questions, and feedback.",
};

const TOPICS = [
  {
    title: "Account & Sign-in",
    description: "Trouble signing in, recovering your account, or syncing progress across devices.",
  },
  {
    title: "Gameplay & Bugs",
    description: "Report a bug, glitch, or unexpected behaviour during snapping, deck building, or battles.",
  },
  {
    title: "Purchases & Wallet",
    description: "Questions about in-game currencies, missing rewards, or transaction issues.",
  },
  {
    title: "Feedback & Suggestions",
    description: "Ideas, feature requests, or general feedback — we read every email.",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-24 pb-20 px-5 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Help</p>
          <h1 className="text-4xl font-black tracking-tight">Support</h1>
          <p className="mt-3 text-cs-muted text-sm max-w-lg">
            Need a hand? Our team is here to help with anything CarSnap-related — from bugs to billing
            to balance feedback.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="p-6 rounded-[14px] border border-cs-border/60 mb-12"
          style={{ background: "rgba(11,18,32,0.8)" }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Contact</p>
          <h2 className="text-2xl font-black tracking-tight mb-3">Email our team</h2>
          <p className="text-sm text-cs-muted leading-relaxed mb-5">
            Send us an email and we&apos;ll get back to you within 2 business days. Please include your
            in-game username and a clear description of the issue.
          </p>
          <a
            href="mailto:support.carsnaptcg@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #D61F19, #991410)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support.carsnaptcg@gmail.com
          </a>
        </div>

        {/* Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-black tracking-tight mb-6">What we can help with</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOPICS.map((t) => (
              <div
                key={t.title}
                className="p-5 rounded-[14px] border border-cs-border/60"
                style={{ background: "rgba(11,18,32,0.8)" }}
              >
                <h3 className="text-base font-bold text-cs-text mb-2">{t.title}</h3>
                <p className="text-sm text-cs-muted leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-black tracking-tight mb-6">Tips for a faster response</h2>
          <div
            className="p-6 rounded-[14px] border border-cs-border/60"
            style={{ background: "rgba(11,18,32,0.8)" }}
          >
            <ul className="space-y-3 text-sm text-cs-muted">
              <li className="flex items-start gap-3">
                <span className="text-cs-cyan mt-0.5">›</span>
                Include your in-game username and the email tied to your account.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cs-cyan mt-0.5">›</span>
                Describe the steps to reproduce the issue and what you expected to happen.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cs-cyan mt-0.5">›</span>
                Attach screenshots or a short screen recording when possible.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cs-cyan mt-0.5">›</span>
                Mention your device model, OS version, and CarSnap app version.
              </li>
            </ul>
          </div>
        </section>

        {/* Related links */}
        <div className="text-sm text-cs-muted/60">
          Looking for something else? See our{" "}
          <Link href="/privacy" className="text-cs-cyan hover:underline">Privacy Policy</Link>
          {" "}or{" "}
          <Link href="/delete-account" className="text-cs-cyan hover:underline">Delete Account</Link>
          {" "}page.
        </div>

      </div>
    </div>
  );
}
