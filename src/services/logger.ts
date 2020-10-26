import { Service } from 'typedi';

export class AsyncSource {
  initialized = false;

  async init(): Promise<void> {
    await new Promise((resolve) =>
      setTimeout(() => {
        this.initialized = true;

        resolve();
      }, 2000),
    );
  }
}

@Service()
export class Logger {
  constructor(private readonly source: AsyncSource) {}

  log(msg: string): void {
    if (this.source.initialized === false) {
      throw new Error('not initialized');
    }

    console.log(msg);
  }
}
