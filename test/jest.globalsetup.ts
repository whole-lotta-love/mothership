import { join } from 'path';
import { config } from 'dotenv';

module.exports = async (): Promise<void> => {
  config({ path: join(process.cwd(), 'test/.env.testing') });
};
