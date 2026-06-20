import "./RaisonEtre.css";

const RaisonEtre = () => {
  return (
    <section className="raison-section" id="raison-detre">
      <div className="raison-container">
        <div className="raison-header">
          <h2 className="raison-title">
            Raison d'être <span className="raison-highlight">de l'école</span>
          </h2>
        </div>

        <div className="raison-content">
          <div className="raison-card raison-card-main">
            <div className="raison-icon">
              <img
                src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=600&h=300&fit=crop"
                alt="Village rural au Cameroun"
              />
            </div>
            <p>
              Dans les zones rurales au Cameroun, le coût de la scolarité est un
              frein au développement de nombreux enfants. Plusieurs facteurs
              entrent en compte : <strong>l'éloignement géographique</strong>,
              la <strong>pauvreté</strong> et les{" "}
              <strong>inégalités de genre</strong> sur l'accessibilité à une
              scolarité.
            </p>
          </div>

          <div className="raison-card raison-card-secondary">
            <div className="raison-icon">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=300&fit=crop"
                alt="Salle de classe en Afrique"
              />
            </div>
            <p>
              Faute d'infrastructures, les écoles publiques sont souvent en
              sureffectifs et présentent un manque de moyens{" "}
              <strong>financiers</strong>, <strong>matériels</strong> et{" "}
              <strong>humains</strong>.
            </p>
          </div>

          <div className="raison-card raison-card-highlight">
            <div className="raison-creation">
              <span className="raison-year">2015</span>
              <p>
                C'est la raison pour laquelle{" "}
                <strong>
                  « Le groupe scolaire bilingue les petits poussins »
                </strong>{" "}
                a été créé en 2015.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaisonEtre;
