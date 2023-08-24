import express from 'express';
import { Request, Response } from 'express'; // You can keep this line as it is

const app = express();
const port = 3000;

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

