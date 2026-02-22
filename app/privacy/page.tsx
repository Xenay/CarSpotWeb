import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — CarSnap",
  description: "CarSnap privacy policy — how we collect, use, and protect your information.",
};

/* Small reusable section heading */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-cs-text mt-12 mb-4 pb-2 border-b border-cs-border/40">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 px-5 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cs-cyan mb-3">Legal</p>
          <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-cs-muted text-sm">
            Last updated: <time dateTime="2026-02-01">February 2026</time>
          </p>
        </div>

        {/* Body */}
        <div className="text-cs-muted leading-relaxed space-y-4 text-[15px]">

          <p>
            This Privacy Policy describes how <strong className="text-cs-text">CarSnap</strong>{" "}
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares information about you when
            you use our mobile application (the &quot;App&quot;). By using CarSnap you agree to the practices described
            in this policy. If you do not agree, please discontinue use of the App.
          </p>

          {/* ── 1 ─────────────────────────────── */}
          <SectionHeading>1. Information We Collect</SectionHeading>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">1.1 Account Information</h3>
          <p>
            When you create an account or sign in via Google, we receive your name, email address, and
            profile picture from your Google account via Firebase Authentication. We use this data solely
            to identify your account within the App.
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">1.2 Camera &amp; Images</h3>
          <p>
            CarSnap uses your device camera to capture images of cars for identification. These images
            are transmitted to our servers and processed by our AI pipeline (YOLO object detection and
            embedding-based classification). <strong className="text-cs-text">We do not permanently store the raw
            images</strong> — they are discarded immediately after processing. The resulting car identification
            data (make, model, year) is linked to your account as your in-game collection.
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">1.3 Gameplay Data</h3>
          <p>
            We collect data generated through your use of the App, including: cars captured, card
            collections, deck configurations, battle history, match outcomes, achievements, XP and level
            progression, daily challenge status, and wallet balances (in-game currencies only — no real
            money transactions are processed by us directly).
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">1.4 Device &amp; Usage Information</h3>
          <p>
            We automatically collect certain technical information, including device model, operating
            system version, unique device identifiers, app version, crash logs, and general usage
            analytics (features used, session duration, screen views). This helps us diagnose issues and
            improve the App.
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">1.5 Advertising Identifiers</h3>
          <p>
            The App uses <strong className="text-cs-text">Google AdMob</strong> to display in-app
            advertisements. AdMob may collect your advertising identifier (IDFA on iOS,
            GAID on Android) and related data to serve relevant ads. You can reset or limit ad tracking
            in your device&apos;s privacy settings.
          </p>

          {/* ── 2 ─────────────────────────────── */}
          <SectionHeading>2. How We Use Your Information</SectionHeading>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>To create and maintain your account and game progress.</li>
            <li>To operate core game features — car recognition, matchmaking, battle resolution, and reward calculation.</li>
            <li>To sync your collection and progress across devices.</li>
            <li>To display in-app advertising via Google AdMob.</li>
            <li>To send push notifications about match results, daily challenges, and seasonal events (you may opt out in device settings).</li>
            <li>To detect and prevent cheating, fraud, or abuse.</li>
            <li>To analyse usage trends and improve the App.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          {/* ── 3 ─────────────────────────────── */}
          <SectionHeading>3. How We Share Your Information</SectionHeading>

          <p>
            We do <strong className="text-cs-text">not sell</strong> your personal information. We may share
            data in the following limited circumstances:
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">3.1 Service Providers</h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-cs-text">Firebase (Google LLC)</strong> — authentication, real-time data storage, and crash reporting.
              Governed by Google&apos;s Privacy Policy.
            </li>
            <li>
              <strong className="text-cs-text">Google AdMob (Google LLC)</strong> — in-app advertising. Governed by Google&apos;s Privacy Policy.
            </li>
            <li>
              <strong className="text-cs-text">AI model infrastructure</strong> — car images are sent to our own backend
              servers for processing. Embeddings may be computed using HuggingFace-hosted models; no raw images are
              forwarded to HuggingFace.
            </li>
          </ul>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">3.2 Legal Requirements</h3>
          <p>
            We may disclose information if required to do so by law, court order, or in response to a
            lawful request by public authorities.
          </p>

          <h3 className="text-cs-text font-semibold mt-6 mb-2">3.3 Aggregated / Anonymised Data</h3>
          <p>
            We may share aggregated, anonymised statistics (e.g. total cars spotted per region, most popular
            car models) that cannot reasonably be used to identify you.
          </p>

          {/* ── 4 ─────────────────────────────── */}
          <SectionHeading>4. Data Retention</SectionHeading>

          <p>
            We retain your account and gameplay data for as long as your account is active. If you request
            account deletion, we will permanently delete your personal data and gameplay records within
            <strong className="text-cs-text"> 30 days</strong>, except where retention is required for legal
            or fraud-prevention purposes. Anonymised aggregate data is not subject to deletion requests.
          </p>

          {/* ── 5 ─────────────────────────────── */}
          <SectionHeading>5. Security</SectionHeading>

          <p>
            We implement industry-standard security measures including TLS encryption for data in transit,
            hashed credentials, and access-controlled infrastructure. However, no method of transmission
            over the Internet is 100% secure. You use the App at your own risk.
          </p>

          {/* ── 6 ─────────────────────────────── */}
          <SectionHeading>6. Children&apos;s Privacy</SectionHeading>

          <p>
            CarSnap is <strong className="text-cs-text">not directed to children under 13 years of age</strong>{" "}
            (or under 16 in the European Economic Area). We do not knowingly collect personal information
            from children. If you believe a child has provided us with personal data, please contact us and
            we will delete it promptly.
          </p>

          {/* ── 7 ─────────────────────────────── */}
          <SectionHeading>7. Your Rights</SectionHeading>

          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-cs-text">Access</strong> — request a copy of the data we hold about you.</li>
            <li><strong className="text-cs-text">Correction</strong> — request correction of inaccurate data.</li>
            <li><strong className="text-cs-text">Deletion</strong> — request deletion of your account and associated data. See our{" "}
              <Link href="/delete-account" className="text-cs-cyan hover:underline">Delete Account</Link> page.
            </li>
            <li><strong className="text-cs-text">Portability</strong> — request a machine-readable export of your data.</li>
            <li><strong className="text-cs-text">Opt-out of personalised ads</strong> — use your device&apos;s privacy settings to limit ad tracking.</li>
          </ul>

          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@carsnap.app" className="text-cs-cyan hover:underline">
              privacy@carsnap.app
            </a>.
            We will respond within 30 days.
          </p>

          {/* ── 8 ─────────────────────────────── */}
          <SectionHeading>8. International Transfers</SectionHeading>

          <p>
            Your information may be transferred to and processed in countries other than your country of
            residence, including countries that may not provide the same level of data protection as your
            home country. By using the App, you consent to such transfers. We take appropriate safeguards
            to protect your information in accordance with this policy.
          </p>

          {/* ── 9 ─────────────────────────────── */}
          <SectionHeading>9. Third-Party Links</SectionHeading>

          <p>
            The App may contain links to third-party websites or services. We are not responsible for
            the privacy practices of those third parties. We encourage you to review their privacy policies
            before providing any information.
          </p>

          {/* ── 10 ────────────────────────────── */}
          <SectionHeading>10. Changes to This Policy</SectionHeading>

          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &quot;Last updated&quot; date at the top of this page and, where appropriate, notify you via
            in-app notification. Your continued use of the App after changes become effective constitutes
            your acceptance of the updated policy.
          </p>

          {/* ── 11 ────────────────────────────── */}
          <SectionHeading>11. Contact Us</SectionHeading>

          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data
            practices, please contact us:
          </p>

          <div
            className="mt-4 p-5 rounded-[14px] border border-cs-border/60 text-sm"
            style={{ background: "rgba(11,18,32,0.8)" }}
          >
            <p className="font-semibold text-cs-text mb-1">CarSnap Privacy Team</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@carsnap.app" className="text-cs-cyan hover:underline">
                privacy@carsnap.app
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
