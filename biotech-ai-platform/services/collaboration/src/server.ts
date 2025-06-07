import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.COLLABORATION_SERVICE_PORT || process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Collaboration Service is running');
});

// Add more routes for collaboration features like real-time editing, comments, etc.

app.listen(port, () => {
  console.log(`Collaboration Service listening at http://localhost:${port}`);
});
