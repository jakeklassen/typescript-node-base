import { add, clamp } from '@app/lib/math';
import express from 'express';

const app = express();

console.log(`add(1, 2, 3, 4) = ${add(1, 2, 3, 4)}`);

console.log(`clamp(12, 1, 100) = ${clamp(12, 1, 100)}`);

app.get('/', (req, res) => res.json({ message: 'o hai!' }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is 🚀 on port ${port}`);
});
