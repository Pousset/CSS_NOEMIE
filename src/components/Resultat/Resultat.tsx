import "./Resultat.css";

const Resultat = () => {
  return (
    <section className="resultat-section" id="excellence">
      <div className="resultat-container">
        <div className="resultat-header">
          <h2 className="resultat-title">
            Excellence <span className="resultat-highlight">éducative</span>
          </h2>
        </div>

        <div className="resultat-content">
          <div className="resultat-stat-hero">
            <div className="resultat-circle">
              <span className="resultat-percentage">100%</span>
              <span className="resultat-percentage-label">de réussite</span>
            </div>
            <p className="resultat-stat-description">
              Taux de réussite aux examens CEP et Common Entrance
            </p>
          </div>

          <div className="resultat-detail">
            <div className="resultat-detail-icon">🎓</div>
            <p className="resultat-detail-text">
              Classe en effectif réduit afin de favoriser l'apprentissage et
              avoir un accompagnement plus individualisé pour chaque enfant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultat;
