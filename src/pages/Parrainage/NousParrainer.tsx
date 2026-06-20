import "./NousParrainer.css";

const NousParrainer = () => {
  return (
    <div className="parrainage-page">
      <div className="parrainage-hero">
        <h1>Nous Parrainer</h1>
        <p>Accompagnez un enfant dans sa scolarité et changez son avenir</p>
      </div>

      <div className="parrainage-container">
        {/* Intro */}
        <div className="parrainage-intro">
          <h2>
            Qu'est-ce que le <span className="highlight">parrainage</span> ?
          </h2>
          <p>
            Parrainer un enfant au sein de l'école Les Petits Poussins, c'est
            lui offrir l'accès à une éducation de qualité, à des repas
            quotidiens et à un suivi personnalisé. Votre engagement permet à un
            enfant de poursuivre sa scolarité dans les meilleures conditions.
          </p>
        </div>

        {/* Les formules */}
        <div className="parrainage-plans">
          <h2 className="section-title">Nos formules de parrainage</h2>
          <div className="plans-grid">
            <div className="plan-card">
              <div
                className="plan-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop')",
                }}
              ></div>
              <div className="plan-content">
                <h3>Parrainage Scolaire</h3>
                <div className="plan-price">
                  <span className="price">30€</span>
                  <span className="period">/ mois</span>
                </div>
                <ul className="plan-features">
                  <li>Frais de scolarité couverts</li>
                  <li>Fournitures scolaires incluses</li>
                  <li>Suivi scolaire personnalisé</li>
                  <li>Nouvelles régulières de l'enfant</li>
                </ul>
                <a href="/contact" className="plan-btn">
                  Je parraine
                </a>
              </div>
            </div>

            <div className="plan-card plan-card-featured">
              <div
                className="plan-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&h=400&fit=crop')",
                }}
              ></div>
              <div className="plan-content">
                <span className="plan-badge">Recommandé</span>
                <h3>Parrainage Complet</h3>
                <div className="plan-price">
                  <span className="price">50€</span>
                  <span className="period">/ mois</span>
                </div>
                <ul className="plan-features">
                  <li>Frais de scolarité couverts</li>
                  <li>Fournitures scolaires incluses</li>
                  <li>Repas quotidiens assurés</li>
                  <li>Suivi médical de base</li>
                  <li>Correspondance avec l'enfant</li>
                </ul>
                <a href="/contact" className="plan-btn plan-btn-featured">
                  Je parraine
                </a>
              </div>
            </div>

            <div className="plan-card">
              <div
                className="plan-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop')",
                }}
              ></div>
              <div className="plan-content">
                <h3>Parrainage Libre</h3>
                <div className="plan-price">
                  <span className="price free">Montant libre</span>
                </div>
                <ul className="plan-features">
                  <li>Contribuez selon vos moyens</li>
                  <li>Chaque euro fait la différence</li>
                  <li>Don ponctuel ou mensuel</li>
                  <li>Reçu fiscal envoyé</li>
                </ul>
                <a href="/contact" className="plan-btn">
                  Je contribue
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Comment ça marche */}
        <div className="parrainage-steps">
          <h2 className="section-title">Comment ça marche ?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choisissez votre formule</h3>
              <p>
                Sélectionnez la formule de parrainage qui vous convient parmi
                nos différentes options.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Contactez-nous</h3>
              <p>
                Remplissez le formulaire de contact ou écrivez-nous directement
                pour démarrer votre parrainage.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Recevez des nouvelles</h3>
              <p>
                Suivez les progrès de l'enfant que vous parrainez grâce à nos
                mises à jour régulières.
              </p>
            </div>
          </div>
        </div>

        {/* Témoignage / Impact */}
        <div className="parrainage-impact">
          <div
            className="impact-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop')",
            }}
          ></div>
          <div className="impact-content">
            <h2>Votre impact concret</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <span className="impact-number">51+</span>
                <span className="impact-label">Élèves scolarisés</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">100%</span>
                <span className="impact-label">Des dons reversés</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">2015</span>
                <span className="impact-label">Année de création</span>
              </div>
            </div>
            <p>
              Chaque parrainage contribue directement à offrir un avenir
              meilleur aux enfants de Yatchika. Vos dons sont intégralement
              utilisés pour le fonctionnement de l'école.
            </p>
            <a href="/contact" className="impact-cta">
              Contactez-nous pour commencer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NousParrainer;
