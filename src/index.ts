import { Static, Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import 'reflect-metadata';
import Container from 'typedi';
import { UserController } from './controllers/user.controller';
import { JobToken } from './jobs';
import { Math } from './jobs/math';
import { SampleLog } from './jobs/sample-log';
import { AsyncSource, Logger } from './services/logger';

async function main() {
  // Cool schema stuff

  const RecordSchema = Type.Object({
    userid: Type.Guid(),
    timestamp: Type.Integer(),
    email: Type.Optional(Type.String({ format: 'email' })),
    status: Type.Union([Type.Literal('online'), Type.Literal('offline')]),
  });

  type Record = Static<typeof RecordSchema>;

  console.log(RecordSchema);

  const ajv = new Ajv({
    // Ingore strict mode because typebox may add fields to schema
    strict: false,
  });

  addFormats(ajv);

  const recordValidator = ajv.compile(RecordSchema);

  const record: Record = {
    userid: 'a379b74d-00ce-4944-9ea4-8585eb862517',
    timestamp: 1,
    email: 'jklassendev@',
    status: 'online',
  };

  console.log(recordValidator(record));

  console.log(recordValidator.errors);

  // End cool schema stuff

  const source = new AsyncSource();

  await source.init();

  const logger = new Logger(source);
  Container.set(Logger, logger);

  Container.import([UserController, SampleLog, Math]);

  const users = Container.get(UserController);

  console.log(await users.get(1));

  const jobs = Container.getMany(JobToken);
  console.log(jobs);

  for (const job of Container.getMany(JobToken)) {
    await job.run();
  }
}

main().catch(console.error);
