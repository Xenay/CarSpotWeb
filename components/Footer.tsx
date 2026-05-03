import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cs-border/40" style={{ background: "rgba(11,18,32,0.6)" }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="sm:col-span-1">
            <span className="text-lg font-black tracking-tight">
              Car<span className="text-cs-red">Snap</span>
            </span>
            <p className="mt-3 text-sm text-cs-muted leading-relaxed max-w-xs">
              The AR car spotting and battle card game. Spot real cars, build your deck, and dominate the grid.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-cs-text/50 uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm text-cs-muted">
              <li>
                <Link href="/support" className="hover:text-cs-text transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cs-text transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-cs-text transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-xs font-semibold text-cs-text/50 uppercase tracking-widest mb-4">Download</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="text-cs-muted/40 cursor-not-allowed select-none">App Store — Coming Soon</span>
              <span className="text-cs-muted/40 cursor-not-allowed select-none">Google Play — Coming Soon</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-cs-border/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cs-muted/40">
          <p>© {new Date().getFullYear()} CarSnap. All rights reserved.</p>
          <p className="font-mono tracking-widest uppercase text-[10px]">Season 1 · Live</p>
        </div>
      </div>
    </footer>
  );
}
