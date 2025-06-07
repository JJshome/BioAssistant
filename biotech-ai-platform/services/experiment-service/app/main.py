from fastapi import FastAPI

app = FastAPI(
    title="Experiment Service",
    description="Service for designing and managing experiments.",
    version="0.1.0"
)

@app.get("/")
async def root():
    return {"message": "Experiment Service is running"}

# Add more endpoints related to experiment design, execution, results, etc.
# Example:
# @app.post("/experiments")
# async def create_experiment(experiment_data: dict):
#     # Implement experiment creation logic
#     return {"status": "created", "experiment_id": "some_id"}
