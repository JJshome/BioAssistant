import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.COMPLIANCE_SERVICE_PORT || process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Compliance Service is running');
});

// Add more routes for compliance checks, audit logs, regulatory reporting, etc.

app.listen(port, () => {
  console.log(`Compliance Service listening at http://localhost:${port}`);
});
