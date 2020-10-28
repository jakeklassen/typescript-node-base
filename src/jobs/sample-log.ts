import { Inject, Service } from 'typedi';
import { Job, JobToken } from '.';
import { Logger } from '../services/logger';

@Service({ id: JobToken, multiple: true })
export class SampleLog implements Job {
  @Inject()
  private logger!: Logger;

  async run(): Promise<void> {
    await new Promise((resolve) =>
      setTimeout(() => {
        this.logger.log('SampleLog#run');

        resolve();
      }, 1000),
    );
  }
}
