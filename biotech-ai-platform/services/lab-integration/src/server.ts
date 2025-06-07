import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // To load .env file variables

const app = express();
// Fallback to 3000 if LAB_INTEGRATION_SERVICE_PORT is not set in .env or process.env
const port = process.env.LAB_INTEGRATION_SERVICE_PORT || process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Lab Integration Service is running');
});

// Add more routes for lab integration functionalities

app.listen(port, () => {
  console.log(`Lab Integration Service listening at http://localhost:${port}`);
});
