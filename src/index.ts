import 'reflect-metadata';
import Container from 'typedi';
import { UserController } from './controllers/user.controller';
import { JobToken } from './jobs';
import { Math } from './jobs/math';
import { SampleLog } from './jobs/sample-log';
import { AsyncSource, Logger } from './services/logger';

async function main() {
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
