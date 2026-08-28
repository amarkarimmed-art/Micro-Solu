# ARCHITECTURE

## Vue d'ensemble

Plateforme de micro-solutions digitales B2B. Le visiteur décrit un problème
digital, l'équipe (ingénieurs IT + commerciaux) conçoit puis développe la
solution adaptée.

```
Browser
   │
   ▼
Next.js (Frontend)
   │  REST API /api/v1/*
   ▼
Laravel
   │
   ├── Controller → Request/Validation → Service → Repository(Interface) → Model
   ▼
PostgreSQL
```

## Décisions architecturales

### Frontend sur l'hôte (dev) / Docker (prod)

Le backend Laravel et PostgreSQL tournent dans Docker car PHP n'est pas
installé nativement. Le frontend Next.js tourne sur le Node de l'hôte en
développement (`npm run dev`) et dans un container en production (image
`standalone`).

### Monorepo

Un seul dépôt avec `frontend/` et `backend/` afin de simplifier la
collaboration et le déploiement.

### Bootstrap automatique du backend

Le container backend, à son premier démarrage, exécute
`composer create-project laravel/laravel .` dans le volume monté si le
projet n'existe pas encore, puis installe les dépendances et démarre
PHP-FPM. Cela évite de committer la structure Laravel non modifiée.

## Opérations cross-services

- `frontend` → `backend` : appels REST via `NEXT_PUBLIC_API_URL`
  (défaut `http://localhost:8000`).
- `backend` → `db` : connecteur PostgreSQL via le réseau Docker Compose
  (`DB_HOST=db`).
- Hôte → `backend` : via Nginx exposé sur `:8000`.
- Hôte → `db` : PostgreSQL exposé sur `:5432`.

## Backend (Laravel)

Stack : Laravel 11, PHP 8.3, PostgreSQL.

Couches :

```
Controller            → reçoit la requête, délègue au Service
Request / Validation  → valide l'entrée (form requests Laravel)
Service               → logique métier
Repository (Interface)→ contrat d'accès aux données
Repository            → implémentation de l'accès aux données (Eloquent)
Model                 → représente les données / relations
Database              → PostgreSQL
```

API versionnée : `/api/v1`.

## Frontend (Next.js)

Structure cible :

```
src/
├── app/                 # routes + pages + metadata SEO
├── components/
│   ├── ui/              # Design System
│   ├── layout/
│   ├── sections/
│   └── forms/
├── features/
├── services/            # client API
├── hooks/
├── lib/
├── types/
├── utils/
└── config/
```

Server Components par défaut (SEO + performance), `"use client"` seulement
pour les composants interactifs.

## Design System

Tokens centralisés (couleurs, typographie, espacements, radius, ombres)
définis dans le frontend. Composants UI réutilisables (`components/ui/`).

## Sécurité

- Validation côté serveur (Laravel)
- Rate limiting (throttle API)
- CORS restreint (dev : `http://localhost:3000`)
- Secrets via variables d'environnement, jamais commités
- Hashing des mots de passe (futur espace admin)
