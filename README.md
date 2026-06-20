# ⚠️ VERSION PUBLIQUE DE DÉMONSTRATION ⚠️

VOUS POUVEZ VOUS EN SERVIR ET REUTILISE LE FRONTEND COMME BON VOUS SEMBLE

> ## IMPORTANT
>
> Cette version est **une version publique simplifiée** du projet, réalisée uniquement pour présenter l'interface utilisateur à une association.
>
> - ✅ Frontend uniquement
> - ✅ Développé simplement avec React
> - ✅ Sans backend
> - ✅ Sans tests automatisés
> - ✅ Sans authentification
> - ✅ Sans système de dons
> - ✅ Sans logique métier
>
> Cette version ne représente **pas l'architecture finale du projet**.
>
> La version finale (privée et non partagée publiquement) est structurée comme suit :
>
> | Couche           | Technologies                                     |
> | ---------------- | ------------------------------------------------ |
> | Frontend         | React 19, TypeScript, Vite, Tailwind CSS         |
> | Backend          | NestJS, TypeScript, TypeORM                      |
> | Base de données  | SQLite (développement) / PostgreSQL (production) |
> | Authentification | JWT + Google OAuth 2.0                           |
>
> Cette V1 a uniquement pour objectif de présenter le frontend et l'expérience utilisateur.

---

⚠️SI VOUS VOULEZ VOUS EN INSPIRER,

> FRONTEND :
>
> - components
> - context
> - guards
> - hooks
> - services
> - types

> BACKEND :
>
> - config database
> - database + migration
> - modules + auth etc
> - etc etc etc

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Développement](#développement)
- [Déploiement](#déploiement)
- [Workflow Git](#workflow-git)
- [Sécurité](#sécurité)
- [Contribution](#contribution)
- [License](#license)

---

## 📖 À propos

Site web moderne et responsive pour l'association **Les Petits Poussins**, dédié à promouvoir l'éducation de qualité accessible à tous les enfants.

### 🎯 Objectifs du site

- Présenter la mission et les valeurs de l'association
- Faciliter les dons et le soutien financier
- Partager les actualités et réussites
- Recruter de nouveaux membres et bénévoles
- Assurer la transparence financière

---

## ✨ Fonctionnalités

### 🏠 Pages principales

| Page                  | Route                            | Description                           |
| --------------------- | -------------------------------- | ------------------------------------- |
| **Accueil**           | `/`                              | Hero, mission, équipe, partenaires    |
| **Actualités**        | `/actualites`                    | Posts Facebook intégrés               |
| **Faire un don**      | `/faire-un-don`                  | Formulaire de dons (mensuel/ponctuel) |
| **Modèle économique** | `/modele-economique`             | Transparence financière (85% enfants) |
| **Contact**           | `/contact`                       | Formulaire de contact + infos         |
| **À venir**           | `/formations`, `/ateliers`, etc. | Pages en développement                |

### 🎨 Composants clés

- **Hero** - Section d'accueil avec parallax et animation de scroll
- **Navbar** - Navigation responsive avec dropdowns
- **TeamCarousel** - Carrousel d'équipe avec témoignages
- **DonationSlider** - Widget de don flottant
- **Footer** - Liens sociaux et mentions légales

### 🔥 Points forts

- ✅ Design moderne et coloré (gradients violet/rose/bleu)
- ✅ Animations fluides (hover, scroll, transitions)
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Accessibilité (ARIA labels, navigation clavier)
- ✅ SEO optimisé (meta tags, structure sémantique)
- ✅ Performance (lazy loading, code splitting)

---

## 🛠 Technologies

### Core

- **React 18** - Bibliothèque UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rapide
- **React Router v6** - Routing côté client

### Styling

- **CSS Modules** - Styling scopé par composant
- **CSS Custom Properties** - Variables de thème
- **Gradients** - Design coloré (#667eea → #764ba2)

### Déploiement

- **Vercel** - Hébergement et CI/CD
- **GitHub** - Versioning et collaboration
- **Git Flow** - Workflow avec branches

### Outils

- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** (recommandé) - Formatage de code
- **Vercel Speed Insights** - Analytics de performance

---

## 📁 Structure du projet

```
NoemieSite/
├── public/                    # Assets statiques
│   ├── logo.png              # Logo de l'association
│   ├── noemie.jpg            # Photo directrice
│   └── *.png, *.jpg          # Autres images
│
├── src/
│   ├── assets/               # Images importées
│   │
│   ├── components/           # Composants réutilisables
│   │   ├── Contact.tsx       # Formulaire de contact
│   │   ├── DonationBox.tsx   # Widget de don flottant
│   │   ├── DonationSlider.tsx
│   │   ├── Engagement.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx        # Pied de page
│   │   ├── Hero.tsx          # Section hero avec parallax
│   │   ├── InteractiveGrid.tsx
│   │   ├── Missions.tsx
│   │   ├── Navbar.tsx        # Navigation principale
│   │   ├── Partners.tsx      # Logos partenaires
│   │   └── TeamCarousel.tsx  # Carrousel équipe
│   │
│   ├── pages/                # Pages complètes
│   │   ├── Actualites.tsx    # Page actualités Facebook
│   │   ├── ComingSoon.tsx    # Page "À venir !"
│   │   ├── Confidentialite.tsx
│   │   ├── FaireUnDon.tsx    # Page de dons
│   │   ├── MentionsLegales.tsx
│   │   └── ModeleEconomique.tsx  # Transparence financière
│   │
│   ├── App.tsx               # Router principal
│   ├── main.tsx              # Point d'entrée
│   ├── App.css               # Styles globaux
│   └── index.css             # Reset CSS
│
├── .gitignore                # Fichiers ignorés par Git
├── eslint.config.js          # Configuration ESLint
├── index.html                # Template HTML
├── package.json              # Dépendances npm
├── tsconfig.json             # Config TypeScript
├── vite.config.ts            # Config Vite
├── vercel.json               # Config Vercel (SPA routing)
├── WORKFLOW.md               # Documentation Git
└── README.md                 # Ce fichier
```

---

## 🚀 Installation

### Prérequis

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **npm** 9+ (inclus avec Node.js)
- **Git** ([Télécharger](https://git-scm.com/))

### 1. Cloner le projet

```bash
git clone https://github.com/Pousset/NoemieSite.git
cd NoemieSite
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:5173**

---

## 💻 Développement

### Commandes disponibles

```bash
# Développement
npm run dev              # Serveur dev avec hot reload

# Build
npm run build            # Build production dans /dist
npm run preview          # Prévisualiser le build

# Linting
npm run lint             # Vérifier le code avec ESLint
```

### Variables d'environnement

Créer un fichier `.env.local` (non commité) :

```env
# Exemple pour un admin
VITE_ADMIN_PASSWORD=secret_password_here

# API Keys (si nécessaire)
VITE_API_KEY=your_api_key
```

⚠️ **Important** : Ajouter `.env.local` dans [`.gitignore`](.gitignore)

### Hot Module Replacement (HMR)

Vite offre un HMR ultra-rapide :

- Les modifications CSS/JSX sont appliquées instantanément
- L'état React est préservé pendant le développement

### Structure des imports

```typescript
// Composants
import Navbar from "./components/Navbar";

// Pages
import FaireUnDon from "./pages/FaireUnDon";

// Assets
import logo from "./assets/logo.png";

// Styles
import "./App.css";
```

---

## 🌐 Déploiement

### Déploiement automatique sur Vercel

Chaque push sur `main` déclenche un déploiement automatique.

#### Configuration Vercel

Le fichier [`vercel.json`](vercel.json) est crucial pour le routing React Router :

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Sans ce fichier, les routes comme `/contact` renverront une erreur 404.

#### Variables d'environnement Vercel

Sur [vercel.com](https://vercel.com) :

1. **Settings** → **Environment Variables**
2. Ajouter vos variables (ex: `VITE_ADMIN_PASSWORD`)
3. Elles sont injectées au build

### Build manuel

```bash
# Build production
npm run build

# Le dossier /dist contient les fichiers statiques
# À déployer sur n'importe quel hébergement statique
```

---

## 🔀 Workflow Git

### Structure des branches

```
main (production)
  ↑
develop (pré-production)
  ↑
feature/nom-fonctionnalité
```

### Créer une nouvelle fonctionnalité

```bash
# 1. Partir de develop
git checkout develop
git pull origin develop

# 2. Créer une branche feature
git checkout -b feature/integration-helloasso

# 3. Développer et commiter
git add .
git commit -m "feat: ajout intégration HelloAsso"
git push origin feature/integration-helloasso

# 4. Fusionner dans develop
git checkout develop
git merge feature/integration-helloasso
git push origin develop

# 5. Mettre en production
git checkout main
git merge develop
git push origin main
```

📄 **Documentation complète** : [WORKFLOW.md](WORKFLOW.md)

### Convention des commits

| Type       | Usage                   | Exemple                               |
| ---------- | ----------------------- | ------------------------------------- |
| `feat`     | Nouvelle fonctionnalité | `feat: ajout page actualités`         |
| `fix`      | Correction de bug       | `fix: correction navigation`          |
| `style`    | Changement CSS          | `style: amélioration hero`            |
| `refactor` | Refactoring             | `refactor: réorganisation composants` |
| `docs`     | Documentation           | `docs: mise à jour README`            |

---

## 🔐 Sécurité

### Protection des données sensibles

#### ❌ À NE JAMAIS faire

```typescript
// MAUVAIS - Mot de passe en dur
const ADMIN_PASSWORD = "mon_super_password";
```

#### ✅ À faire

```typescript
// BON - Variable d'environnement
const password = import.meta.env.VITE_ADMIN_PASSWORD;
```

### Recommandations sécurité

1. **Variables d'environnement** : Utiliser `.env.local` (jamais commité)
2. **Backend requis** : Pour une vraie sécurité admin (Supabase, Firebase)
3. **HTTPS** : Activé automatiquement sur Vercel
4. **Validation côté serveur** : Ne jamais faire confiance au frontend seul
5. **JWT tokens** : Pour l'authentification avec expiration

### Solutions backend recommandées

- **Supabase** - Auth + Base de données (gratuit)
- **Firebase** - Auth Google/Email (gratuit jusqu'à 10k users)
- **Vercel Serverless Functions** - API backend intégré

---

## 🤝 Contribution

### Pour les développeurs

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/ma-feature`)
3. Commiter les changements (`git commit -m 'feat: ajout feature'`)
4. Push vers la branche (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request

## 📞 Contact

**Association Les Petits Poussins**

- **Site web** : [https://noemie-site.vercel.app](https://noemie-site.vercel.app)
- **Email** : contact@lespetitspoussins.org
- **Facebook** : [Page Facebook](https://www.facebook.com/profile.php?id=100063495123691)
- **GitHub** : [Pousset/NoemieSite](https://github.com/Pousset/NoemieSite)

---

## 📄 License

Ce projet est sous license **MIT**.

---

**Fait avec ❤️ pour l'éducation de tous les enfants**

_Dernière mise à jour : 15 décembre 2025_
