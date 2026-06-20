import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Engagement from "./components/Engagement/Engagement";
import Missions from "./components/Missions/Missions";
import TeamCarousel from "./components/TeamCarousel/TeamCarousel";
import DonationSlider from "./components/DonationSlider/DonationSlider";
import Contact from "./components/Contact/Contact";
// import Partners from "./components/Partners";
import Footer from "./components/layout/Footer";
import DonationBox from "./components/DonationBox/DonationBox";
import RaisonEtre from "./components/RaisonEtre/RaisonEtre";
import ResultatPage from "./pages/Resultat/Resultat";
import MentionsLegales from "./pages/MentionLegales/MentionsLegales";
import Confidentialite from "./pages/Confidentialités/Confidentialite";
import Actualites from "./pages/Actualités/Actualites";
import FaireUnDon from "./pages/FaireUnDon/FaireUnDon";
import ModeleEconomique from "./pages/ModeleEconomique/ModeleEconomique";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import FAQ from "./pages/FAQ/FAQ";
import Ecole from "./pages/Ecole/Ecole";
import Photos from "./pages/Photos/Photos";

import "./App.css";

// Layout réutilisable pour les pages standards
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RaisonEtre />
        <Engagement />
        <Missions />
      </main>
      <TeamCarousel />
      {/* <Partners /> */}
      <DonationSlider />
      <Footer />
      <DonationBox />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />
          <Route
            path="/actualites"
            element={
              <PageLayout>
                <Actualites />
              </PageLayout>
            }
          />
          <Route
            path="/photos"
            element={
              <PageLayout>
                <Photos />
              </PageLayout>
            }
          />
          <Route
            path="/faire-un-don"
            element={
              <PageLayout>
                <FaireUnDon />
              </PageLayout>
            }
          />
          <Route
            path="/modele-economique"
            element={
              <PageLayout>
                <ModeleEconomique />
              </PageLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <PageLayout>
                <FAQ />
              </PageLayout>
            }
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />

          {/* Pages "À venir" */}
          <Route
            path="/formations"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/ateliers"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/emploi-du-temps"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/notre-histoire"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/inscription"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/ressources"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/temoignages"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          />
          <Route
            path="/en-savoir-plus"
            element={
              <PageLayout>
                <ModeleEconomique />
              </PageLayout>
            }
          />
          {/* <Route
            path="/partenaires"
            element={
              <PageLayout>
                <ComingSoon />
              </PageLayout>
            }
          /> */}
          <Route
            path="/ecole"
            element={
              <PageLayout>
                <Ecole />
              </PageLayout>
            }
          />
          <Route
            path="/resultats"
            element={
              <PageLayout>
                <ResultatPage />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
