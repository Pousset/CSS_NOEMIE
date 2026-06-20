import { useState } from "react";
import "./FaireUnDon.css";

const FaireUnDon = () => {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [20, 50, 100, 200];

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setAmount(parseInt(value) || 0);
    }
  };

  const calculateImpact = (amount: number) => {
    if (amount >= 200) return "6 mois de scolarité pour un enfant";
    if (amount >= 100) return "3 mois de fournitures scolaires";
    if (amount >= 50) return "1 mois de repas pour un élève";
    return "Des fournitures scolaires pour un enfant";
  };

  return (
    <div className="faire-un-don-page">
      <div className="donation-hero">
        <h1>Soutenez notre mission</h1>
        <p>Chaque don compte pour offrir une éducation de qualité à tous</p>
      </div>

      <div className="donation-content">
        <div className="donation-container">
          <div className="donation-card">
            <div className="donation-frequency">
              <button
                className={`frequency-btn ${
                  frequency === "once" ? "active" : ""
                }`}
                onClick={() => setFrequency("once")}
              >
                Don ponctuel
              </button>
              <button
                className={`frequency-btn ${
                  frequency === "monthly" ? "active" : ""
                }`}
                onClick={() => setFrequency("monthly")}
              >
                Don mensuel
              </button>
            </div>

            <div className="donation-amounts">
              <h3>Choisissez votre montant</h3>
              <div className="amount-buttons">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    className={`amount-btn ${
                      amount === preset && !customAmount ? "active" : ""
                    }`}
                    onClick={() => handleAmountClick(preset)}
                  >
                    {preset}€
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <label htmlFor="customAmount">Ou un montant personnalisé</label>
                <div className="input-wrapper">
                  <input
                    id="customAmount"
                    type="number"
                    placeholder="Montant"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    min="1"
                  />
                  <span className="currency">€</span>
                </div>
              </div>
            </div>

            <div className="donation-impact">
              <div className="impact-box">
                <h4>Votre impact</h4>
                <p className="impact-description">{calculateImpact(amount)}</p>
                <div className="tax-benefit">
                  <p>
                    <strong>Déduction fiscale :</strong>{" "}
                    {Math.round(amount * 0.66)}€
                  </p>
                  <small>66% de votre don est déductible de vos impôts</small>
                </div>
              </div>
            </div>

            <button className="donate-button">
              Faire un don de {amount}€{" "}
              {frequency === "monthly" ? "par mois" : ""}
            </button>

            <div className="payment-security">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                Paiement 100% sécurisé
              </p>
            </div>
          </div>

          <div className="donation-info-card">
            <h3>Pourquoi nous soutenir ?</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">📚</div>
                <div>
                  <h4>Éducation de qualité</h4>
                  <p>
                    Accès gratuit à des cours et du matériel pédagogique pour
                    tous les enfants
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🍽️</div>
                <div>
                  <h4>Repas quotidiens</h4>
                  <p>
                    Une alimentation équilibrée pour favoriser l'apprentissage
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">👥</div>
                <div>
                  <h4>Accompagnement personnalisé</h4>
                  <p>Soutien scolaire et suivi individualisé de chaque élève</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🌍</div>
                <div>
                  <h4>Impact durable</h4>
                  <p>Développement de projets éducatifs à long terme</p>
                </div>
              </div>
            </div>

            <div className="transparency">
              <h4>Transparence totale</h4>
              <div className="transparency-chart">
                <div className="chart-item">
                  <div className="chart-bar" style={{ width: "85%" }}>
                    <span>85%</span>
                  </div>
                  <p>Actions sur le terrain</p>
                </div>
                <div className="chart-item">
                  <div className="chart-bar" style={{ width: "10%" }}>
                    <span>10%</span>
                  </div>
                  <p>Fonctionnement</p>
                </div>
                <div className="chart-item">
                  <div className="chart-bar" style={{ width: "5%" }}>
                    <span>5%</span>
                  </div>
                  <p>Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireUnDon;
