# Micro-Solu — Plateforme de micro-solutions digitales B2B

Nous résolvons n'importe quel problème digital ou métier d'une entreprise.
Nous ne vendons pas une technologie. Nous résolvons un problème.

## Stack technique

| Couche    | Technologie                                   |
| --------- | --------------------------------------------- |
| Frontend  | Next.js 16, React 19, TypeScript, Tailwind v4 |
| Backend   | Laravel 11, PHP 8.3 (REST API)                |
| Database  | PostgreSQL 16                                  |
| Infra     | Docker, Git                                    |

## Architecture

```
Browser
   │
   ▼
Next.js  ── REST API /api/v1/* ──►  Laravel
   │                                  │
   │                            Controller → Request → Service
   │                            → Repository(Interface) → Model
   ▼                                  ▼
                              PostgreSQL (via Docker)
```

## Prérequis

- Docker Desktop en cours d'exécution
- Node.js 18.18+ (pour le frontend en dev local)

## Démarrage rapide

### Base de données + Backend Laravel (Docker)

```bash
cp .env.example .env          # adapter si besoin
docker compose up -d db backend webserver
```

- Backend API : http://localhost:8000
- PostgreSQL : localhost:5432

Le container initialise automatiquement le projet Laravel et installe les
dépendances au premier démarrage.

### Frontend Next.js (dev local)

```bash
cd frontend
npm install
npm run dev
```

- Frontend : http://localhost:3000

## Structure du monorepo

```
Micro-Solu/
├── docker-compose.yml
├── docker/nginx/            # config Nginx pour Laravel
├── backend/                 # Laravel API (Docker)
│   ├── Dockerfile
│   ├── entrypoint.sh
│   └── app/Http/Controllers/Api/V1/...
└── frontend/                # Next.js (host in dev / Docker in prod)
    ├── Dockerfile
    └── src/app/...
```

## Conventions Git

- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `refactor:` refactorisation
- `test:` tests
- `docs:` documentation
- `chore:` tâches de maintenance

## Sécurité

Aucun secret dans le code. Les variables d'environnement sont chargées
depuis `.env` (jamais commité). Voir `.env.example` pour les variables
requises.

## Documentation technique

- [ARCHITECTURE.md](./ARCHITECTURE.md)

## Roadmap MVP

1. Initialisation du projet ✅
2. Architecture frontend
3. Architecture backend
4. Database + migrations
5. API
6. Design System
7. Homepage
8. Pages Solutions
9. Formulaire « Décrire mon problème »
10. Backend des demandes
11. SEO complet
12. Tests
13. Sécurité
14. Performance
15. Production
