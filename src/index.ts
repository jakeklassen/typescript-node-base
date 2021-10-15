import { add, clamp } from '@app/lib/math';
import express, { ErrorRequestHandler } from 'express';
import pino from 'pino-http';

console.log(`add(1, 2, 3, 4) = ${add(1, 2, 3, 4)}`);
console.log(`clamp(12, 1, 100) = ${clamp(12, 1, 100)}`);

const app = express();

app.use(
  pino({
    prettyPrint: true,
  }),
);

app.get('/', (req, res) => {
  res.json({ message: 'o hai!' });
});

const errorHandler: ErrorRequestHandler = (error: unknown, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  req.log.error(error as string);

  res.status(500).json({ error });
};

app.use(errorHandler);

const port = Number(process.env.PORT) || 9;

app.listen(port, () => {
  console.log(`Server is 🚀 on port ${port}`);
});
