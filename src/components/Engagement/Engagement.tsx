import React from "react";

const Engagement: React.FC = () => {
  const handleScrollNext = () => {
    const current = document.getElementById("engagement-section");
    if (!current) return;
    const next = current.nextElementSibling as HTMLElement | null;
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="engagement-section"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "grid",
        placeItems: "center",
        position: "relative",
        zIndex: 0,
        padding: "0 1.25rem",
        scrollSnapAlign: "start",
      }}
    >
      {/* Subtle color accent backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80rem 30rem at 50% 110%, rgba(76,64,207,0.12), transparent 60%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Centered headline */}
      <h2
        style={{
          margin: 0,
          lineHeight: 1.1,
          textAlign: "center",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#0f172a",
        }}
      >
        Parce que
        <br />
        votre <span style={{ color: "#4C40CF" }}>engagement</span>
        <br />
        change tout.
        <span
          style={{
            display: "block",
            width: "84px",
            height: "4px",
            margin: "1rem auto 0",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #4C40CF, #9E7BFF)",
          }}
        />
      </h2>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollNext}
        aria-label="Continuer vers la section suivante"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "2rem",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "transparent",
          border: "1px solid rgba(15,23,42,0.12)",
          color: "#0f172a",
          borderRadius: "999px",
          padding: "0.5rem 0.9rem",
          cursor: "pointer",
          backdropFilter: "saturate(140%) blur(6px)",
        }}
      >
        <span style={{ fontSize: "0.9rem" }}>Scroll</span>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16.5l-5-5M12 16.5l5-5M12 16.5V5"
            stroke="#4C40CF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default Engagement;
