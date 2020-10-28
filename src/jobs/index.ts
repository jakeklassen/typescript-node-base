import { Token } from 'typedi';

export interface Job {
  run(): Promise<void>;
}

export const JobToken = new Token<Job>('jobs');
