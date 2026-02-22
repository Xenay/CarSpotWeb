interface MediaSlotProps {
  /** Descriptive label shown in the placeholder */
  label?: string;
  /** Aspect ratio of the slot */
  aspect?: "portrait" | "landscape" | "square";
  /** Whether this slot expects a video or a screenshot */
  type?: "screenshot" | "video";
  /** If provided, renders actual media instead of a placeholder */
  src?: string;
  alt?: string;
}

const ASPECT: Record<string, string> = {
  portrait:  "aspect-[9/16]",
  landscape: "aspect-[16/9]",
  square:    "aspect-square",
};

export default function MediaSlot({
  label = "Screenshot",
  aspect = "portrait",
  type = "screenshot",
  src,
  alt,
}: MediaSlotProps) {
  const aspectClass = ASPECT[aspect] ?? ASPECT.portrait;

  /* ── Real media ── */
  if (src) {
    return (
      <div className={`relative ${aspectClass} rounded-[14px] overflow-hidden bg-cs-surface border border-cs-border`}>
        {type === "video" ? (
          <video src={src} controls className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? label} className="absolute inset-0 w-full h-full object-cover" />
        )}
      </div>
    );
  }

  /* ── Placeholder ── */
  return (
    <div
      className={`relative ${aspectClass} rounded-[14px] flex flex-col items-center justify-center gap-3 group
        border-2 border-dashed border-cs-border/50 hover:border-cs-cyan/40 transition-all overflow-hidden`}
      style={{ background: "rgba(11,18,32,0.8)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Icon */}
      {type === "video" ? (
        <svg
          className="relative w-8 h-8 text-cs-border group-hover:text-cs-cyan/60 transition-colors"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg
          className="relative w-8 h-8 text-cs-border group-hover:text-cs-cyan/60 transition-colors"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}

      <span className="relative text-[10px] font-mono tracking-[0.2em] uppercase text-cs-border group-hover:text-cs-cyan/50 transition-colors">
        {label}
      </span>
    </div>
  );
}
