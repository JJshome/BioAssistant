from fastapi.testclient import TestClient
from app.main import app # Adjust import if main.py is elsewhere

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Literature Service is running"}
