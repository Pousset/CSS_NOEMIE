import { useState, useEffect } from "react";
import "./TeamCarousel.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  cta: {
    text: string;
    link: string;
  };
}

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers: TeamMember[] = [
    {
      name: "Marie D.",
      role: "Directrice — Les Petits Poussins",
      image: "/noemie.jpg",
      testimonial:
        "Depuis 15 ans, je dirige cette école avec passion et conviction. Notre mission est d'offrir une éducation de qualité à tous, sans distinction. Grâce à nos enseignants dévoués et nos partenaires engagés, nous accompagnons chaque jour des centaines d'élèves vers la réussite.",
      cta: {
        text: "Découvrir notre mission",
        link: "/notre-mission",
      },
    },
    {
      name: "Ahmed K.",
      role: "Responsable pédagogique",
      image: "/noemie.jpg",
      testimonial:
        "En tant que responsable pédagogique, je veille à ce que nos méthodes d'enseignement soient adaptées à chaque élève. Nous avons développé des programmes innovants qui permettent à nos étudiants de progresser à leur rythme tout en développant leur autonomie.",
      cta: {
        text: "Voir nos programmes",
        link: "/nos-programmes",
      },
    },
    {
      name: "Sophie L.",
      role: "Coordinatrice humanitaire",
      image: "/noemie.jpg",
      testimonial:
        "Je coordonne les projets humanitaires de notre école. Nous menons des actions concrètes sur le terrain pour améliorer l'accès à l'éducation. Chaque projet est pensé avec et pour les communautés locales, dans une démarche de développement durable.",
      cta: {
        text: "Nos projets humanitaires",
        link: "/projets",
      },
    },
    {
      name: "Thomas B.",
      role: "Enseignant et tuteur",
      image: "/noemie.jpg",
      testimonial:
        "Enseigner dans cette école est une expérience unique. Nous ne nous contentons pas de transmettre des connaissances, nous accompagnons chaque élève dans son parcours personnel. L'approche humaine et bienveillante fait toute la différence.",
      cta: {
        text: "Rejoindre notre équipe",
        link: "/recrutement",
      },
    },
    {
      name: "Fatima R.",
      role: "Responsable partenariats",
      image: "/noemie.jpg",
      testimonial:
        "Je développe les partenariats avec les entreprises et associations pour soutenir notre école. Grâce à nos 20+ partenaires engagés, nous pouvons offrir plus de ressources, d'opportunités et de soutien à nos élèves et leurs familles.",
      cta: {
        text: "Devenir partenaire",
        link: "/partenaires",
      },
    },
    {
      name: "Lucas M.",
      role: "Responsable numérique",
      image: "/noemie.jpg",
      testimonial:
        "Je pilote la transformation numérique de l'école. Nous avons mis en place des outils digitaux accessibles pour tous : emplois du temps en ligne, ressources pédagogiques numériques et plateformes d'apprentissage interactives.",
      cta: {
        text: "Découvrir nos outils",
        link: "/ressources",
      },
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teamMembers.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="team-carousel-section" id="notre-equipe">
      <div className="team-carousel-container">
        <h2 className="team-section-title">
          Notre équipe{" "}
          <span className="text-highlight">s'engage pour vous</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-nav prev"
            onClick={goToPrevious}
            aria-label="Membre précédent"
          >
            ‹
          </button>

          <div className="testimonials-container">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`testimonial ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <div
                    className="image"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  >
                    <div className="overlay">
                      <p className="overlay-name">{member.name}</p>
                      <p className="overlay-role">{member.role}</p>
                    </div>
                  </div>

                  <div className="content">
                    <div>
                      <p className="citation">{member.testimonial}</p>
                      <p className="name">{member.name}</p>
                      <p className="role">{member.role}</p>
                    </div>

                    <div className="cta-container">
                      <p className="text">Comme {member.name.split(" ")[0]},</p>
                      <a className="link" href={member.cta.link}>
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path
                            d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM361 417C351.6 426.4 336.4 426.4 327.1 417C317.8 407.6 317.7 392.4 327.1 383.1L366.1 344.1L216 344.1C202.7 344.1 192 333.4 192 320.1C192 306.8 202.7 296.1 216 296.1L366.1 296.1L327.1 257.1C317.7 247.7 317.7 232.5 327.1 223.2C336.5 213.9 351.7 213.8 361 223.2L441 303.2C450.4 312.6 450.4 327.8 441 337.1L361 417.1z"
                            fill="#4C40CF"
                          />
                        </svg>
                        <span>{member.cta.text}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-nav next"
            onClick={goToNext}
            aria-label="Membre suivant"
          >
            ›
          </button>
        </div>

        {/* Dots navigation */}
        <div className="carousel-dots">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller au membre ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
