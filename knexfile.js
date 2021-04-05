// Update with your config settings.

module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      database: "pictures",
      user: "macforpizza"
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations"
    },
};
