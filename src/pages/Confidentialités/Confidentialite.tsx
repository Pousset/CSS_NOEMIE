import "./Confidentialite.css";

const Confidentialite = () => {
  return (
    <div className="confidentialite-page">
      <div className="confidentialite-container">
        <h1>Politique de Confidentialité</h1>

        <section className="confidentialite-section">
          <h2>1. Introduction</h2>
          <p>
            Les Petits Poussins accorde une grande importance à la protection de
            vos données personnelles. La présente politique de confidentialité a
            pour but de vous informer sur la manière dont nous collectons,
            utilisons et protégeons vos informations personnelles lorsque vous
            utilisez notre site web.
          </p>
        </section>

        <section className="confidentialite-section">
          <h2>2. Données collectées</h2>
          <p>Nous collectons les types de données suivants :</p>
          <ul>
            <li>
              <strong>Données d'identification :</strong> nom, prénom, adresse
              email, numéro de téléphone
            </li>
            <li>
              <strong>Données de navigation :</strong> adresse IP, type de
              navigateur, pages consultées, durée de visite
            </li>
            <li>
              <strong>Données de formulaire :</strong> informations que vous
              nous transmettez via nos formulaires de contact ou d'inscription
            </li>
            <li>
              <strong>Données de donation :</strong> informations nécessaires au
              traitement de vos dons (montant, date, etc.)
            </li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>3. Finalité du traitement</h2>
          <p>Vos données personnelles sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes d'information</li>
            <li>
              Gérer vos inscriptions et votre participation à nos programmes
            </li>
            <li>Traiter vos dons et vous fournir les reçus fiscaux</li>
            <li>Vous envoyer notre newsletter (avec votre consentement)</li>
            <li>Améliorer nos services et notre site web</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>4. Base légale du traitement</h2>
          <p>Le traitement de vos données personnelles repose sur :</p>
          <ul>
            <li>Votre consentement (formulaires, newsletter)</li>
            <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
            <li>Le respect d'obligations légales</li>
            <li>Notre intérêt légitime à gérer et améliorer nos services</li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>5. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire
            aux finalités pour lesquelles elles ont été collectées, et
            conformément aux obligations légales en vigueur :
          </p>
          <ul>
            <li>Données de contact : 3 ans après le dernier contact</li>
            <li>Données de donation : 10 ans pour les obligations fiscales</li>
            <li>Données de navigation : 13 mois maximum</li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>6. Partage des données</h2>
          <p>
            Vos données personnelles ne sont pas vendues. Elles peuvent être
            partagées avec :
          </p>
          <ul>
            <li>
              Nos prestataires de services (hébergement, paiement) sous contrat
              de confidentialité
            </li>
            <li>Les autorités compétentes en cas d'obligation légale</li>
            <li>Nos partenaires avec votre consentement explicite</li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>7. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre la perte,
            l'utilisation abusive, l'accès non autorisé, la divulgation, la
            modification ou la destruction, incluant :
          </p>
          <ul>
            <li>Chiffrement SSL/TLS pour les transmissions de données</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Sauvegardes régulières</li>
            <li>Mises à jour de sécurité</li>
          </ul>
        </section>

        <section className="confidentialite-section">
          <h2>8. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous disposez des
            droits suivants :
          </p>
          <ul>
            <li>
              <strong>Droit d'accès :</strong> obtenir une copie de vos données
              personnelles
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger vos données
              inexactes ou incomplètes
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression de
              vos données
            </li>
            <li>
              <strong>Droit à la limitation :</strong> limiter le traitement de
              vos données
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au traitement
              de vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> recevoir vos données
              dans un format structuré
            </li>
            <li>
              <strong>Droit de retirer votre consentement</strong> à tout moment
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href="mailto:contact@ecole-solidaire.org">
              contact@ecole-solidaire.org
            </a>
          </p>
        </section>

        <section className="confidentialite-section">
          <h2>9. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience. Vous
            pouvez gérer vos préférences de cookies dans les paramètres de votre
            navigateur. Pour plus d'informations, consultez notre{" "}
            <a href="/cookies">politique de cookies</a>.
          </p>
        </section>

        <section className="confidentialite-section">
          <h2>10. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications seront publiées sur
            cette page avec une date de mise à jour.
          </p>
        </section>

        <section className="confidentialite-section">
          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou
            le traitement de vos données personnelles, vous pouvez nous
            contacter :
          </p>
          <p>
            <strong>Les Petits Poussins</strong>
            <br />
            Email:{" "}
            <a href="mailto:contact@ecole-solidaire.org">
              contact@ecole-solidaire.org
            </a>
            <br />
            Téléphone: +237 1 23 45 67 89
            <br />
            Adresse: Yatchika, Cameroun
          </p>
        </section>

        <div className="confidentialite-footer">
          <p>Dernière mise à jour: 13 décembre 2025</p>
          <a href="/" className="back-link">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;
