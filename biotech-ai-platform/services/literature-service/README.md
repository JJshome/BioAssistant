# Literature Service

Handles scientific literature search and analysis.
Powered by FastAPI.

## Development

Requires Python 3.10+ and Poetry.

1.  Navigate to this directory.
2.  Install dependencies: `poetry install`
3.  Run the service: `poetry run uvicorn app.main:app --host 0.0.0.0 --port ${LITERATURE_SERVICE_PORT:-8000} --reload`
