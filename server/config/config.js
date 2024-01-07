const config = {
  development: {
    port: process.env.DEV_PORT || 3000,
    database: {
      host: process.env.DEV_DB_HOST || 'localhost',
      port: process.env.DEV_DB_PORT || 3306, // Replace with your actual database port
      username: process.env.DEV_DB_USER || 'dev_user',
      password: process.env.DEV_DB_PASSWORD || 'dev_password',
      database: process.env.DEV_DB_NAME || 'dev_database',
      dialect: process.env.DEV_DB_DIALECT || 'mysql',
    },
    // other development-specific configurations
  },
  production: {
    port: process.env.PROD_PORT || 8080,
    database: {
      host: process.env.PROD_DB_HOST || 'db.host',
      port: process.env.PROD_DB_PORT || 3306, // Replace with your actual database port
      username: process.env.PROD_DB_USER || 'root',
      password: process.env.PROD_DB_PASSWORD || 'db.password',
      database: process.env.PROD_DB_NAME || 'db.name',
      dialect: process.env.PROD_DB_DIALECT || 'mysql',
    },
    // other production-specific configurations
  },
};

module.exports = config;
