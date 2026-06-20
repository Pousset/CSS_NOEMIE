import "./MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page">
      <div className="mentions-container">
        <h1>Mentions Légales</h1>

        <section className="mentions-section">
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Les Petits Poussins</strong>
            <br />
            Association à but non lucratif
            <br />
            Yatchika, Cameroun
            <br />
            Email:{" "}
            <a href="mailto:contact@ecole-solidaire.org">
              contact@ecole-solidaire.org
            </a>
            <br />
            Téléphone: +237 1 23 45 67 89
          </p>
        </section>

        <section className="mentions-section">
          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par [Nom de l'hébergeur]
            <br />
            [Adresse de l'hébergeur]
            <br />
            [Téléphone de l'hébergeur]
          </p>
        </section>

        <section className="mentions-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos) est
            protégé par le droit d'auteur et appartient à Les Petits Poussins ou
            à ses partenaires. Toute reproduction, distribution ou utilisation
            non autorisée est strictement interdite.
          </p>
        </section>

        <section className="mentions-section">
          <h2>4. Protection des données personnelles</h2>
          <p>
            Conformément à la réglementation applicable en matière de protection
            des données personnelles, vous disposez d'un droit d'accès, de
            rectification et de suppression des données vous concernant. Pour
            exercer ce droit, vous pouvez nous contacter à l'adresse email
            suivante:{" "}
            <a href="mailto:contact@ecole-solidaire.org">
              contact@ecole-solidaire.org
            </a>
          </p>
        </section>

        <section className="mentions-section">
          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur
            et analyser le trafic. En continuant à naviguer sur ce site, vous
            acceptez l'utilisation de cookies. Vous pouvez à tout moment
            modifier vos préférences dans les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mentions-section">
          <h2>6. Responsabilité</h2>
          <p>
            Les Petits Poussins s'efforce d'assurer l'exactitude et la mise à
            jour des informations diffusées sur ce site. Toutefois, nous ne
            pouvons garantir l'exactitude, la précision ou l'exhaustivité des
            informations mises à disposition. En conséquence, nous déclinons
            toute responsabilité pour toute imprécision, inexactitude ou
            omission.
          </p>
        </section>

        <section className="mentions-section">
          <h2>7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites internet. École
            Solidaire n'exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu.
          </p>
        </section>

        <section className="mentions-section">
          <h2>8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit camerounais.
            Tout litige relatif à l'utilisation de ce site sera soumis à la
            compétence exclusive des tribunaux camerounais.
          </p>
        </section>

        <div className="mentions-footer">
          <p>Dernière mise à jour: 13 décembre 2025</p>
          <a href="/" className="back-link">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
