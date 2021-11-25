import clipboary from 'clipboardy';
import express, { ErrorRequestHandler } from 'express';
import getPort from 'get-port';
import pino from 'pino-http';
import { add, clamp } from './lib/math.js';

console.log(`add(1, 2, 3, 4) = ${add(1, 2, 3, 4)}`);
console.log(`clamp(12, 1, 100) = ${clamp(12, 1, 100)}`);

const app = express();

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  }),
);

app.get('/', (req, res) => {
  res.json({ message: 'o hai 👋' });
});

const errorHandler: ErrorRequestHandler = (error: unknown, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  req.log.error(error as string);

  res.status(500).json({ error });
};

app.use(errorHandler);

const port = Number(process.env.PORT) || (await getPort());

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    clipboary.writeSync(`http://localhost:${port}`);
  }

  console.log(`Server is 🚀 on port ${port}`);
});
