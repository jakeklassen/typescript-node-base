import { Inject, Service } from 'typedi';
import { Job, JobToken } from '.';
import { Logger } from '../services/logger';

@Service({ id: JobToken, multiple: true })
export class Math implements Job {
  @Inject()
  private logger!: Logger;

  async run(): Promise<void> {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        this.logger.log('Math#run');

        resolve();
      }, 1000),
    );
  }
}
