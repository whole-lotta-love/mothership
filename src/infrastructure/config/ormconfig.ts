import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  port: 5432,
  type: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/infrastructure/database/migrations/*.ts'],
  cli: { migrationsDir: 'src/infrastructure/database/migrations/' },
};

export default ormConfig;
