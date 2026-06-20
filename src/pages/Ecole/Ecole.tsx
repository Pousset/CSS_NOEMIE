import "./Ecole.css";

const Ecole = () => {
  return (
    <div className="ecole-page">
      {/* Header Hero */}
      <section className="ecole-hero">
        <div className="ecole-hero-content">
          <h1>Groupe Scolaire Bilingue Les Petits Poussins YATCHIKA</h1>
          <p className="tagline">2DUCATION POUR TOUS</p>
          <p className="subtitle">Ecole sociale et inclusive</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="ecole-container">
        {/* Introduction */}
        <section className="ecole-intro">
          <div className="intro-text">
            <p className="intro-highlight">
              Les enfants d'aujourd'hui sont l'avenir de demain.
            </p>
            <p className="intro-secondary">
              Donner la chance à chacun est notre ligne de conduite
            </p>
            <p className="intro-mission">
              Notre école a pour vocation de lutter contre la pauvreté et de
              donner sa chance à chacun
            </p>
          </div>
        </section>

        {/* Raison d'être */}
        <section className="ecole-section">
          <h2>1. Raison d'être de l'école</h2>
          <div className="section-content">
            <p>
              Dans les zones rurales au Cameroun, le coût de la scolarité est un
              frein au développement de nombreux enfants. Plusieurs facteurs
              entrent en compte : l'éloignement géographique, la pauvreté et les
              inégalités de genre sur l'accessibilité à une scolarité.
            </p>
            <p>
              Faute d'infrastructures, les écoles publiques sont souvent en
              sureffectifs et présentent un manque de moyens financiers,
              matériels et humains.
            </p>
            <p className="highlight-box">
              C'est la raison pour laquelle « Le groupe scolaire bilingue les
              petits poussins » a été créé en 2015
            </p>
          </div>
        </section>

        {/* Missions */}
        <section className="ecole-section">
          <h2>2. Nos missions</h2>
          <div className="section-content">
            <ul className="missions-list">
              <li>L'éducation de niveau maternelle et primaire</li>
              <li>
                La prévention santé et la formation des enseignants à une
                pédagogie non-violente
              </li>
              <li>
                Le développement durable avec la mise en place d'un jardin
                potager dans l'école
              </li>
              <li>Ecole ouverte aux enfants en situation de handicap</li>
              <li>
                Mise en place de cours d'alphabétisation en français et anglais
                pour les parents d'élèves
              </li>
              <li>Depuis la rentrée 2025, l'ouverture d'une crèche</li>
            </ul>
          </div>
        </section>

        {/* Dispositions */}
        <section className="ecole-section">
          <h2>1. Dispositions de l'école</h2>
          <div className="section-content">
            <ul className="facilities-list">
              <li>Salle de classe</li>
              <li>Crèche</li>
              <li>Cantine</li>
              <li>Cuisine</li>
              <li>Salle informatique</li>
              <li>Jardin potager</li>
            </ul>
          </div>
        </section>

        {/* Excellence Éducative */}
        <section className="ecole-section">
          <h2>2. Excellence éducative</h2>
          <div className="section-content">
            <div className="excellence-box">
              <p>
                <strong>Taux de réussite : 100%</strong>
              </p>
              <p>
                Classe en effectif réduit afin de favoriser l'apprentissage et
                avoir un accompagnement plus individualisé pour chaque enfant
              </p>
            </div>
            <div className="stats-box">
              <div className="stat-item">
                <span className="stat-number">53</span>
                <span className="stat-label">élèves</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section className="ecole-section">
          <h2>3. Nos partenaires</h2>
          <div className="section-content">
            <div className="partners-grid">
              <div className="partner-card">
                <h3>ICAM</h3>
                <p>
                  <strong>Aide alimentaire :</strong> Pour optimiser le
                  développement de l'enfant, l'alimentation est un besoin
                  fondamental, c'est pour cela que l'ICAM offre des dons
                  alimentaires.
                </p>
                <p>
                  Il participe aussi à l'aide aux devoirs pour les enfants de
                  l'orphelinat.
                </p>
              </div>

              <div className="partner-card">
                <h3>Enfants Parents Solidaires</h3>
                <p>
                  Association des parents d'élève, elle intervient à la maison
                  de l'innovation qui se trouve dans l'école.
                </p>
                <p>
                  Elle met en place les cours d'alphabétisation et aide
                  financièrement l'école.
                </p>
              </div>

              <div className="partner-card">
                <h3>Suisse</h3>
                <p>Partenaire international soutenant nos initiatives.</p>
              </div>

              <div className="partner-card">
                <h3>France</h3>
                <p>Partenaire international soutenant nos initiatives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Moyens Financiers */}
        <section className="ecole-section">
          <h2>4. Moyens financiers et modèle de financement</h2>
          <div className="section-content">
            <p>
              L'école accueille les enfants orphelins, en situation de handicap
              et les enfants dont les parents vivent dans la précarité. Seuls
              les parents ayant les moyens financiers participent aux frais de
              scolarité. Cela permet de payer les salaires des enseignants.
            </p>
            <p>
              Malheureusement, les fonds ne suffisent pas toujours pour
              entretenir les matériels et autres commodités.
            </p>
            <p className="highlight-box">
              Les dons permettent de payer les salaires des enseignants, les
              fournitures scolaires, les matériaux pour le potager et l'achat de
              livres.
            </p>

            <div className="engagement-section">
              <h3>Découvrir</h3>
              <ul className="engagement-list">
                <li>
                  <a href="/actualites">Actualités</a>
                </li>
                <li>Photos</li>
              </ul>
            </div>

            <div className="engagement-section">
              <h3>S'engager</h3>
              <ul className="engagement-list">
                <li>
                  <a href="#">Ajouter un parrainage</a>
                </li>
                <li>
                  <a href="#">Devenir bénévole</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ecole-cta">
          <h2>Soutenir l'école</h2>
          <p>
            Votre contribution nous aide à offrir une éducation de qualité aux
            enfants qui en ont le plus besoin.
          </p>
          <a href="/faire-un-don" className="cta-button">
            Faire un don
          </a>
        </section>
      </div>
    </div>
  );
};

export default Ecole;
