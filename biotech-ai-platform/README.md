# BioTech AI Research Assistant Platform

This monorepo contains the codebase for the BioTech AI Research Assistant, a platform designed to automate and streamline life sciences research.

## Overview

The platform consists of several applications and services:

-   **Applications (`apps/`)**:
    -   `web`: Main web dashboard for researchers.
    -   `admin`: Admin panel for system management.
    -   `mobile`: Mobile companion app.
-   **Services (`services/`)**:
    -   `literature-service`: Handles scientific literature search and analysis.
    -   `experiment-service`: Manages experiment design and automation.
    -   `analysis-service`: Performs data analysis and runs machine learning models.
    -   `lab-integration`: Integrates with lab equipment and LIMS.
    -   `collaboration`: Powers real-time collaboration features.
    -   `compliance`: Manages regulatory compliance aspects.
-   **Shared Packages (`packages/`)**:
    -   `ui`: Common UI components.
    -   `types`: Shared TypeScript type definitions.
    -   `utils`: Common utility functions.
    -   `config`: Shared configurations.
    -   `database`: Database schemas, migrations, and ORM models.

## Tech Stack

-   **Monorepo**: Turborepo + pnpm
-   **Backend**: Python (FastAPI), Node.js (Express)
-   **Frontend**: Next.js 14 (App Router) + TypeScript
-   **Mobile**: React Native
-   **Database**: PostgreSQL, Redis, MongoDB
-   **Infrastructure**: Docker, Kubernetes-ready
-   **CI/CD**: GitHub Actions

## Prerequisites

-   Node.js (v18 or later recommended)
-   pnpm (v8 or later recommended)
-   Docker & Docker Compose
-   Python (v3.10 or later recommended)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd biotech-ai-platform
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Copy `.env.example` to `.env` and fill in the necessary values.
    ```bash
    cp .env.example .env
    ```

4.  **Start development environment:**
    This will start all services and databases defined in `docker-compose.yml`.
    ```bash
    docker-compose up -d
    ```

5.  **Run a specific application or service (example for `web` app):**
    Navigate to the app's directory and run its dev script:
    ```bash
    pnpm --filter web dev
    ```
    Or run all apps and services in dev mode:
    ```bash
    pnpm dev
    ```

## Workspace Commands

-   `pnpm build`: Build all apps and packages.
-   `pnpm dev`: Run all apps and services in development mode.
-   `pnpm test`: Run tests for all packages.
-   `pnpm lint`: Lint all code.
-   `pnpm format`: Format all code.

Refer to individual `package.json` or `pyproject.toml` files for more specific commands.

## Directory Structure

```
/biotech-ai-platform
├── apps/
│   ├── web/
│   ├── admin/
│   └── mobile/
├── services/
│   ├── literature-service/
│   ├── experiment-service/
│   ├── analysis-service/
│   ├── lab-integration/
│   ├── collaboration/
│   └── compliance/
├── packages/
│   ├── ui/
│   ├── types/
│   ├── utils/
│   ├── config/
│   └── database/
├── infrastructure/
│   ├── docker/
│   ├── kubernetes/
│   ├── terraform/
│   └── scripts/
├── docs/
└── tests/
```
