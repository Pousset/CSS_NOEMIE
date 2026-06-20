import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Resultat.css";

const Resultat = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const installations = [
    {
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
      title: "Salles de classe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?q=80&w=600&auto=format&fit=crop",
      title: "Crèche",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      title: "Cantine",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
      title: "Cuisine",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
      title: "Salle informatique",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=600&auto=format&fit=crop",
      title: "Jardin potager",
    },
  ];

  return (
    <div className="resultat-page">
      {/* Hero */}
      <section className="resultat-hero">
        <a href="/" className="resultat-back-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Retour
        </a>
        <h1>Notre école en détail</h1>
        <p>
          Découvrez les infrastructures, l'organisation et les résultats du
          Groupe Scolaire Bilingue Les Petits Poussins
        </p>
      </section>

      {/* Disposition */}
      <section className="resultat-block" id="disposition">
        <div className="resultat-block-container">
          <h2 className="resultat-block-title">
            <span className="resultat-block-number">1</span>
            Dispositions de l'école
          </h2>
          <div className="disposition-grid">
            {installations.map((item, index) => (
              <div key={index} className="disposition-card">
                <div className="disposition-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <span className="disposition-card-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="resultat-block resultat-block-dark" id="organigramme">
        <div className="resultat-block-container">
          <h2 className="resultat-block-title resultat-block-title-light">
            <span className="resultat-block-number">2</span>
            Organigramme de l'école
          </h2>
          <div className="organigramme-grid">
            <div className="organigramme-card">
              <span className="organigramme-value">53</span>
              <span className="organigramme-label">élèves</span>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence éducative */}
      <section className="resultat-block" id="excellence">
        <div className="resultat-block-container">
          <h2 className="resultat-block-title">
            <span className="resultat-block-number">3</span>
            Excellence éducative
          </h2>
          <div className="excellence-content">
            <div className="excellence-stat">
              <div className="excellence-circle">
                <span className="excellence-percentage">100%</span>
              </div>
              <p className="excellence-stat-label">Taux de réussite</p>
            </div>
            <div className="excellence-text">
              <p>
                Classe en effectif réduit afin de favoriser l'apprentissage et
                avoir un accompagnement plus individualisé pour chaque enfant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="resultat-block resultat-block-dark" id="partenaires">
        <div className="resultat-block-container">
          <h2 className="resultat-block-title resultat-block-title-light">
            <span className="resultat-block-number">4</span>
            Nos partenaires
          </h2>
          <div className="partenaires-grid">
            <div className="partenaire-card">
              <h3>ICAM</h3>
              <p>
                <strong>Aide alimentaire :</strong> pour optimiser le
                développement de l'enfant, l'alimentation est un besoin
                fondamental, c'est pour cela que l'ICAM offre des dons
                alimentaires.
              </p>
              <p>
                Il participe aussi à l'aide aux devoirs pour les enfants de
                l'orphelinat.
              </p>
            </div>
            <div className="partenaire-card">
              <h3>Enfants Parents Solidaires</h3>
              <p>
                Association des parents d'élèves, elle intervient à la maison de
                l'innovation qui se trouve dans l'école.
              </p>
              <p>
                Elle met en place les cours d'alphabétisation et aide
                financièrement l'école.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="resultat-cta">
        <h2>Soutenir l'école</h2>
        <p>
          Votre contribution nous aide à offrir une éducation de qualité aux
          enfants qui en ont le plus besoin.
        </p>
        <a href="/faire-un-don" className="resultat-cta-btn">
          Faire un don
        </a>
      </section>
    </div>
  );
};

export default Resultat;
