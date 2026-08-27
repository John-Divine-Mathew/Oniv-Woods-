export default function FinalCTAPro({ onEnroll }) {
  return (
    <section className="relative py-20" style={{ background: "var(--oniv-charcoal)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "var(--oniv-ivory)" }}>
            Let's craft your future.
          </h2>
          <p className="mt-3" style={{ color: "rgba(249,246,240,0.7)" }}>
            Transforming creators into industry leaders — starting with a single enquiry.
          </p>
        </div>
        <button
          onClick={onEnroll}
          className="shrink-0 px-8 py-3.5 rounded-md font-semibold transition-opacity hover:opacity-90"
          style={{ background: "var(--oniv-amber)", color: "var(--oniv-ivory)" }}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
