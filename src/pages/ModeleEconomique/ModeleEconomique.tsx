import "./ModeleEconomique.css";

const ModeleEconomique = () => {
  return (
    <div className="modele-economique-page">
      <div className="modele-hero">
        <div className="hero-logo">
          <img src="/logo.png" alt="Les Petits Poussins" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">100% TRANSPARENT</div>
          <h1>Un modèle au service des enfants</h1>
          <p className="hero-subtitle">
            85% DE VOS DONS DIRECTEMENT INVESTIS DANS L'ÉDUCATION
          </p>
          <p className="hero-description">
            Depuis notre création, nous nous engageons à utiliser chaque euro
            avec responsabilité. Parce que votre confiance mérite notre
            transparence totale.
          </p>
        </div>
      </div>

      <div className="modele-container">
        {/* Présentation de l'école */}
        <section className="presentation-section">
          <div className="presentation-content">
            <p>
              L'école accueille les enfants orphelins, en situation de handicap
              et les enfants dont les parents vivent dans la précarité. Seuls
              les parents ayant les moyens financiers participent aux frais de
              scolarité. Cela permet de payer le salaire des enseignants.
            </p>
            <p>
              Malheureusement, les fonds ne suffisent pas toujours pour
              entretenir le matériel et les autres commodités.
            </p>
            <p>
              Vos dons permettent de payer les salaires des enseignants mais
              aussi les fournitures scolaires, les matériaux pour le potager,
              l'achat de livres, et bien plus encore.
            </p>
          </div>
        </section>

        {/* Pourquoi ce modèle */}
        <section id="pourquoi" className="why-section">
          <h2>3 bonnes raisons qui nous poussent à être transparent</h2>

          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-header">
                <div className="reason-number">01</div>
                <h3>POUR MÉRITER VOTRE CONFIANCE</h3>
              </div>
              <div className="reason-image">
                <img src="/noemie.jpg" alt="Confiance" />
              </div>
              <p>
                Chaque don est un acte de foi. Vous nous confiez vos ressources
                pour changer des vies. Nous devons vous montrer exactement
                comment nous les utilisons, sans détour ni complexité.
              </p>
            </div>

            <div className="reason-card">
              <div className="reason-header">
                <div className="reason-number">02</div>
                <h3>POUR UNE ÉDUCATION ACCESSIBLE</h3>
              </div>
              <div className="reason-image">
                <img src="/noemie.jpg" alt="Éducation" />
              </div>
              <p>
                L'éducation ne devrait jamais être un privilège. En étant
                transparent sur nos finances, nous montrons qu'il est possible
                de faire mieux avec moins, au service de tous les enfants.
              </p>
            </div>

            <div className="reason-card">
              <div className="reason-header">
                <div className="reason-number">03</div>
                <h3>POUR INSPIRER LE CHANGEMENT</h3>
              </div>
              <div className="reason-image">
                <img src="/noemie.jpg" alt="Changement" />
              </div>
              <p>
                En partageant notre modèle, nous espérons inspirer d'autres
                organisations à adopter cette transparence. Plus nous serons
                nombreux, plus l'impact sera grand.
              </p>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section id="comment" className="how-it-works-section">
          <h2>Concrètement, comment ça marche ?</h2>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>VOUS DONNEZ</h3>
              <p>
                Votre don nous permet de financer nos programmes éducatifs.
                Qu'il soit mensuel ou ponctuel, chaque contribution compte.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>NOUS INVESTISSONS</h3>
              <p>
                85% sont directement investis dans l'éducation et les repas. 15%
                couvrent nos frais de fonctionnement et communication.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>LES ENFANTS RÉUSSISSENT</h3>
              <p>
                Grâce à votre soutien, nous pouvons offrir une éducation de
                qualité à tous les enfants, sans exception.
              </p>
            </div>
          </div>
        </section>

        {/* À quoi servent vos dons */}
        <section id="repartition" className="breakdown-section">
          <h2>À quoi servent vos dons ?</h2>

          <div className="breakdown-grid">
            <div className="breakdown-card">
              <div className="breakdown-percentage">70%</div>
              <h3>PROGRAMMES ÉDUCATIFS</h3>
              <p>
                Enseignants qualifiés, matériel pédagogique, sorties scolaires,
                soutien personnalisé. Tout pour garantir la réussite de chaque
                élève.
              </p>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-percentage">15%</div>
              <h3>REPAS ET NUTRITION</h3>
              <p>
                Des repas équilibrés chaque jour pour assurer la concentration
                et le bien-être des enfants. Parce qu'on apprend mieux le ventre
                plein.
              </p>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-percentage">10%</div>
              <h3>FONCTIONNEMENT</h3>
              <p>
                Loyer, équipements, fournitures, maintenance. Les coûts
                essentiels pour maintenir un cadre sécurisé et accueillant.
              </p>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-percentage">5%</div>
              <h3>COMMUNICATION</h3>
              <p>
                Partager notre mission, sensibiliser le public, recruter de
                nouveaux donateurs pour amplifier notre impact.
              </p>
            </div>
          </div>

          <div className="promise-banner">
            <h3>✓ Notre promesse</h3>
            <p>
              85% de vos dons vont DIRECTEMENT à l'éducation et aux repas des
              enfants.
              <br />
              C'est notre engagement depuis le premier jour.
            </p>
          </div>
        </section>

        {/* Comparaison */}
        <section id="comparaison" className="comparison-section">
          <h2>0 Commission, 0 Frais cachés</h2>

          <div className="comparison-container">
            <div className="comparison-column other">
              <h3>Autres organisations</h3>
              <div className="comparison-row">
                <span className="label">Don initial</span>
                <span className="value">100€</span>
              </div>
              <div className="comparison-row negative">
                <span className="label">Frais de gestion</span>
                <span className="value">- 10€</span>
              </div>
              <div className="comparison-row negative">
                <span className="label">Frais admin</span>
                <span className="value">- 5€</span>
              </div>
              <div className="comparison-total">
                <span className="label">Pour le projet</span>
                <span className="value">85€</span>
              </div>
            </div>

            <div className="vs-divider">VS</div>

            <div className="comparison-column us">
              <h3>Les Petits Poussins</h3>
              <div className="comparison-row">
                <span className="label">Don initial</span>
                <span className="value">100€</span>
              </div>
              <div className="comparison-row positive">
                <span className="label">Frais de gestion</span>
                <span className="value">0€</span>
              </div>
              <div className="comparison-row positive">
                <span className="label">Frais admin</span>
                <span className="value">0€</span>
              </div>
              <div className="comparison-total highlight">
                <span className="label">Pour les enfants</span>
                <span className="value">100€</span>
              </div>
              <div className="comparison-badge">100% POUR LES ENFANTS</div>
            </div>
          </div>
        </section>
      </div>

      {/* Chiffres Clés */}
      <section className="stats-section">
        <h2>Ensemble, depuis le début</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">250+</div>
            <p>Enfants accompagnés chaque année</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">95%</div>
            <p>Taux de réussite scolaire</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">15 000</div>
            <p>Repas servis en 2024</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">100%</div>
            <p>De transparence sur nos finances</p>
          </div>
        </div>
      </section>

      <div className="modele-container">
        {/* Votre rôle */}
        <section className="role-section">
          <h2>Votre rôle est essentiel !</h2>
          <p className="role-intro">
            En tant que donateur, vous êtes au cœur de notre modèle. Plus nous
            sommes nombreux, plus notre impact est grand.
          </p>

          <div className="role-actions">
            <div className="role-card">
              <h3>💬 Parlez-en</h3>
              <p>
                Partagez notre mission autour de vous, sur les réseaux sociaux.
                Chaque nouvelle personne qui nous découvre peut faire la
                différence.
              </p>
            </div>

            <div className="role-card">
              <h3>❤️ Donnez régulièrement</h3>
              <p>
                Un don mensuel, même modeste, nous permet de planifier et de
                pérenniser nos actions sur le long terme.
              </p>
            </div>

            <div className="role-card">
              <h3>🤝 Impliquez-vous</h3>
              <p>
                Devenez bénévole, parrain d'un élève, ou organisez une collecte.
                Ensemble, allons plus loin.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Vous aussi, changez une vie</h2>
            <p>
              Rejoignez les centaines de donateurs qui croient en l'éducation
              pour tous. Ensemble, nous pouvons faire la différence.
            </p>
            <div className="cta-buttons">
              <a href="/faire-un-don" className="btn-primary">
                Je fais un don
              </a>
              <a href="/contact" className="btn-secondary">
                Parlons de votre projet
              </a>
            </div>
            <p className="cta-note">
              💚 Votre don est déductible à 66% de vos impôts
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModeleEconomique;
