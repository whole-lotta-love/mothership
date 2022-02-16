export default () => ({
  port: parseInt(process.env.PORT, 10) || 4444,
  database: {
    port: 5432,
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: ['dist/**/*.entity.js'],
  },
});
