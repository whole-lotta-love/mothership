export default () => ({
  port: parseInt(process.env.PORT, 10) || 4444,
  database: {
    port: 5432,
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV !== 'production',
    logging: false,
    entities:
      process.env.NODE_ENV === 'test'
        ? ['src/**/*.entity.ts']
        : ['dist/**/*.entity.js'],
    keepConnectionAlive: process.env.NODE_ENV === 'test',
  },
});
