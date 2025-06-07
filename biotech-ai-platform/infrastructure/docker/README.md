# Docker Configuration

This directory contains Dockerfiles and related configurations for containerizing the applications and services of the BioTech AI Platform.

- Individual services and apps will have their own `Dockerfile` in their respective directories (e.g., `../../services/literature-service/Dockerfile`).
- Common Docker configurations or base images might be defined here.
- The root `docker-compose.yml` is used for local development orchestration.
