import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple scroll thresholds with generous spacing
  const logoFadeOutDuration = 120; // Logo fades out over 120px
  const logoDone = logoFadeOutDuration;

  const transitionFadeInDuration = 80; // Transition fades in over 80px
  const transitionStart = logoDone;
  const transitionStableDuration = 200; // Transition stays visible for 200px
  const transitionFadeOutDuration = 80; // Transition fades out over 80px
  const transitionDone =
    transitionStart +
    transitionFadeInDuration +
    transitionStableDuration +
    transitionFadeOutDuration;

  const contentFadeInDuration = 80; // Content fades in over 80px
  const contentStart = transitionDone;

  // Calculate opacity and transforms based on scroll
  // LOGO: Fades out from scrollY 0 to logoDone
  let logoOpacity = 0;
  let logoScale = 1;
  if (scrollY < logoDone) {
    logoOpacity = Math.max(0, 1 - scrollY / logoFadeOutDuration);
    logoScale = Math.max(0.5, 1 - scrollY / (logoFadeOutDuration * 2));
  } else {
    logoOpacity = 0;
    logoScale = 0.5;
  }

  // TRANSITION: Starts after logo, fades in → stays → fades out
  let transitionOpacity = 0;
  let transitionScale = 1;
  const transitionFadeInEnd = transitionStart + transitionFadeInDuration;
  const transitionStableEnd = transitionFadeInEnd + transitionStableDuration;
  const transitionFadeOutEnd = transitionStableEnd + transitionFadeOutDuration;

  if (scrollY >= transitionStart && scrollY < transitionFadeInEnd) {
    // Fade in
    transitionOpacity = (scrollY - transitionStart) / transitionFadeInDuration;
    transitionScale = 1;
  } else if (scrollY >= transitionFadeInEnd && scrollY < transitionStableEnd) {
    // Stable, fully visible
    transitionOpacity = 1;
    transitionScale = 1;
  } else if (scrollY >= transitionStableEnd && scrollY < transitionFadeOutEnd) {
    // Fade out
    transitionOpacity = Math.max(
      0,
      1 - (scrollY - transitionStableEnd) / transitionFadeOutDuration,
    );
    transitionScale = 1;
  } else {
    transitionOpacity = 0;
    transitionScale = 0.5;
  }

  // CONTENT: Starts after transition, fades in → stays → fades out
  let contentOpacity = 0;
  let contentScale = 1;
  const contentStableDuration = 200;
  const contentFadeOutDuration = 80;
  const contentFadeInEnd = contentStart + contentFadeInDuration;
  const contentStableEnd = contentFadeInEnd + contentStableDuration;
  const contentFadeOutEnd = contentStableEnd + contentFadeOutDuration;

  const statsFadeInDuration = 80;
  const statsStart = contentFadeOutEnd;
  const statsStableDuration = 200;
  const statsFadeOutDuration = 80;

  // STATS: Starts after content, fades in → stays → fades out
  let statsOpacity = 0;
  let statsScale = 1;
  const statsFadeInEnd = statsStart + statsFadeInDuration;
  const statsStableEnd = statsFadeInEnd + statsStableDuration;
  const statsFadeOutEnd = statsStableEnd + statsFadeOutDuration;

  if (scrollY >= statsStart && scrollY < statsFadeInEnd) {
    // Fade in
    statsOpacity = (scrollY - statsStart) / statsFadeInDuration;
    statsScale = 1;
  } else if (scrollY >= statsFadeInEnd && scrollY < statsStableEnd) {
    // Stable, fully visible
    statsOpacity = 1;
    statsScale = 1;
  } else if (scrollY >= statsStableEnd && scrollY < statsFadeOutEnd) {
    // Fade out
    statsOpacity = Math.max(
      0,
      1 - (scrollY - statsStableEnd) / statsFadeOutDuration,
    );
    statsScale = 1;
  } else {
    statsOpacity = 0;
    statsScale = 0.5;
  }

  if (scrollY >= contentStart && scrollY < contentFadeInEnd) {
    // Fade in
    contentOpacity = (scrollY - contentStart) / contentFadeInDuration;
    contentScale = 1;
  } else if (scrollY >= contentFadeInEnd && scrollY < contentStableEnd) {
    // Stable, fully visible
    contentOpacity = 1;
    contentScale = 1;
  } else if (scrollY >= contentStableEnd && scrollY < contentFadeOutEnd) {
    // Fade out
    contentOpacity = Math.max(
      0,
      1 - (scrollY - contentStableEnd) / contentFadeOutDuration,
    );
    contentScale = 1;
  } else {
    contentOpacity = 0;
    contentScale = 0.5;
  }

  // Text effects on scroll - Subtle and professional
  const titleOpacity = Math.max(0, 1 - scrollY / 350);
  const titleTranslateY = Math.min(50, scrollY / 4);
  const taglineOpacity = Math.max(0, 1 - scrollY / 250);
  const taglineTranslateY = Math.min(30, scrollY / 6);

  return (
    <section className="hero">
      {/* Logo Section - Fades out on scroll */}
      <div
        className="hero-logo-section"
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          pointerEvents: logoOpacity < 0.1 ? "none" : "auto",
        }}
      >
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img
              src="/logo.png"
              alt="Les Petits Poussins Logo"
              className="logo-image"
            />
          </div>
          <h1
            className="logo-title"
            style={{
              opacity: titleOpacity,
              transform: `translateY(-${titleTranslateY}px)`,
            }}
          >
            École Solidaire
          </h1>
          <p
            className="logo-tagline"
            style={{
              opacity: taglineOpacity,
              transform: `translateY(-${taglineTranslateY}px)`,
            }}
          >
            Éducation pour Tous
          </p>
        </div>
        <div className="scroll-indicator">
          <span>Scroll pour découvrir</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Transition Section - École Presentation */}
      <div
        className="hero-transition-section"
        style={{
          opacity: transitionOpacity,
          transform: `scale(${transitionScale})`,
          pointerEvents: transitionOpacity < 0.1 ? "none" : "auto",
        }}
      >
        <div className="transition-container">
          <div className="transition-content">
            <h2 className="transition-title">École Sociale et Inclusive</h2>
            <p className="transition-subtitle">
              Les enfants d'aujourd'hui sont l'avenir de demain.
            </p>
            <p className="transition-text">
              Donner la chance à chacun est notre ligne de conduite.
            </p>
            <p className="transition-text">
              Notre école a pour vocation de lutter contre la pauvreté et de
              donner sa chance à chacun.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Fades in after transition */}
      <div
        className="hero-content-section"
        style={{
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
          pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
        }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">
              L'éducation
              <span className="hero-highlight"> pour tous</span>
            </h2>
            <p className="hero-subtitle">
              Parce que chaque enfant mérite d'accéder à une éducation de
              qualité, notre école s'engage au service de l'humanitaire et du
              développement.
            </p>
            <div className="hero-actions">
              <a href="/faire-un-don" className="btn btn-hero-primary">
                Faire un don
              </a>
              <a href="/en-savoir-plus" className="btn btn-hero-secondary">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Fades in after content */}
      <div
        className="hero-stats-section"
        style={{
          opacity: statsOpacity,
          transform: `scale(${statsScale})`,
          pointerEvents: statsOpacity < 0.1 ? "none" : "auto",
        }}
      >
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">51+</div>
            <div className="stat-label">Élèves accompagnés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Enseignants dévoués</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Engagement solidaire</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
