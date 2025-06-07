# Analysis Service

Performs data analysis and runs machine learning models.
Powered by FastAPI.

## Development

Requires Python 3.10+ and Poetry.

1.  Navigate to this directory.
2.  Install dependencies: `poetry install`
3.  Run the service: `poetry run uvicorn app.main:app --host 0.0.0.0 --port ${ANALYSIS_SERVICE_PORT:-8002} --reload`
