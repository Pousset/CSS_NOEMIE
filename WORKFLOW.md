# 🌳 Workflow Git - Les Petits Poussins

## Structure des branches

```
main (production)
  ↑
develop (pré-production)
  ↑
feature/nom-fonctionnalité
```

## Branches principales

### `main` - Production

- Code en ligne sur https://noemie-site.vercel.app
- Toujours stable et fonctionnel
- Déploiement automatique sur Vercel
- ⚠️ Pas de commit direct sur main

### `develop` - Intégration

- Version de test avant mise en production
- Validation des nouvelles fonctionnalités
- Peut contenir des bugs mineurs

### `feature/*` - Développement

- Branches temporaires pour nouvelles fonctionnalités
- Nommage : `feature/nom-explicite`
- Supprimées après fusion dans develop

---

## 🚀 Workflow standard

### 1. Créer une nouvelle fonctionnalité

```bash
# Se placer sur develop et mettre à jour
git checkout develop
git pull origin develop

# Créer la branche feature
git checkout -b feature/nom-de-la-fonctionnalite

# Exemples de noms :
# feature/integration-helloasso
# feature/page-evenements
# feature/amelioration-navbar
# feature/fix-navigation
```

### 2. Développer la fonctionnalité

```bash
# Faire les modifications dans le code

# Vérifier les changements
git status

# Ajouter les fichiers modifiés
git add .

# Commiter avec un message clair
git commit -m "feat: description de la fonctionnalité"

# Pousser sur GitHub
git push origin feature/nom-de-la-fonctionnalite
```

### 3. Fusionner dans develop

```bash
# Retourner sur develop
git checkout develop

# Mettre à jour develop
git pull origin develop

# Fusionner la feature
git merge feature/nom-de-la-fonctionnalite

# Pousser develop
git push origin develop

# Supprimer la branche feature en local
git branch -d feature/nom-de-la-fonctionnalite

# Supprimer la branche feature sur GitHub (optionnel)
git push origin --delete feature/nom-de-la-fonctionnalite
```

### 4. Tester sur develop

- Vérifier que tout fonctionne correctement
- Tester sur plusieurs navigateurs si nécessaire
- Valider avec l'équipe si applicable

### 5. Mettre en production

```bash
# Se placer sur main
git checkout main

# Mettre à jour main
git pull origin main

# Fusionner develop dans main
git merge develop

# Pousser en production
git push origin main

# → Vercel déploie automatiquement le site
```

---

## 📝 Convention des messages de commit

### Format

```
<type>: <description courte>

[description détaillée optionnelle]
```

### Types de commits

| Type       | Usage                   | Exemple                               |
| ---------- | ----------------------- | ------------------------------------- |
| `feat`     | Nouvelle fonctionnalité | `feat: ajout page actualités`         |
| `fix`      | Correction de bug       | `fix: correction navigation navbar`   |
| `style`    | Changement CSS/design   | `style: amélioration design hero`     |
| `refactor` | Refactoring code        | `refactor: réorganisation composants` |
| `docs`     | Documentation           | `docs: ajout README`                  |
| `chore`    | Maintenance             | `chore: mise à jour dépendances`      |
| `perf`     | Performance             | `perf: optimisation images`           |
| `test`     | Tests                   | `test: ajout tests unitaires`         |

### Exemples de bons commits

```bash
git commit -m "feat: intégration HelloAsso pour les dons"
git commit -m "fix: correction du scroll vers les sections"
git commit -m "style: amélioration responsive page actualités"
git commit -m "refactor: déplacement composants dans dossier layout"
git commit -m "docs: ajout workflow Git"
```

---

## 🔧 Commandes utiles

### Gestion des branches

````bash
# Voir toutes les branches
git branch -a

# Voir la branche actuelle
git branch --show-current

# Changer de branche
git checkout nom-branche

# Créer et changer de branche
git checkout -b nouvelle-branche

# Supprimer une branche locale
git branch -d nom-branche

# Supprimer une branche distante
git push origin --delete nom-branche
```

### État et historique

```bash
# Voir l'état actuel
git status

# Voir les différences non commitées
git diff

# Voir l'historique des commits
git log --oneline --graph --all

# Voir les branches avec leur dernier commit
git branch -v
```

### Annulation

```bash
# Annuler les modifications non commitées
git checkout -- .

# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (supprimer les modifications) ⚠️
git reset --hard HEAD~1

# Annuler un merge non poussé
git merge --abort
```

### Mise à jour

```bash
# Récupérer les dernières modifications
git fetch origin

# Mettre à jour la branche actuelle
git pull origin nom-branche

# Mettre à jour toutes les branches
git pull --all
```

---

## 🚨 Résolution de problèmes

### Conflit lors d'un merge

```bash
# Voir les fichiers en conflit
git status

# Ouvrir les fichiers et résoudre manuellement les conflits
# Chercher les marqueurs <<<<<, =====, >>>>>

# Après résolution, ajouter les fichiers
git add .

# Continuer le merge
git commit -m "fix: résolution conflits"
```

### J'ai commité sur la mauvaise branche

```bash
# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Changer de branche
git checkout bonne-branche

# Recommiter
git add .
git commit -m "feat: description"
```

### J'ai oublié de créer une branche feature

```bash
# Créer la branche maintenant (sans commit)
git checkout -b feature/nom-feature

# Tes modifications sont conservées
git add .
git commit -m "feat: description"
```

---

## 📋 Checklist avant mise en production

- [ ] Toutes les fonctionnalités testées sur develop
- [ ] Pas d'erreurs dans la console
- [ ] Site responsive (mobile, tablette, desktop)
- [ ] Navigation fonctionnelle
- [ ] Formulaires testés
- [ ] Images optimisées
- [ ] Liens fonctionnels
- [ ] Tous les commits ont des messages clairs

---

## 🎯 Workflow simplifié (pour travail solo)

Si tu travailles seul et veux aller plus vite :

```bash
# Développement direct sur develop
git checkout develop
# ... modifications ...
git add .
git commit -m "feat: description"
git push origin develop

# Mise en prod quand prêt
git checkout main
git merge develop
git push origin main
```

⚠️ **Attention** : Cette approche est plus rapide mais moins sûre. Utilise le workflow complet avec les branches `feature/*` pour les fonctionnalités importantes.

---

## 📞 Contact

En cas de problème avec Git, contacte l'équipe technique ou consulte :
- [Documentation Git officielle](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

---

**Dernière mise à jour** : 15 décembre 2025`
````
