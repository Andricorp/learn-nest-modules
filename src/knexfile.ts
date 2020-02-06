import * as Knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';

const config: Knex.Config = {
  client: 'pg',

  debug: true,

  connection: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
  },

  migrations: {
    extension: 'ts',
    directory: './database/migrations',
    stub: './database/migration.stub.ts',
  },
  seeds: {
    extension: 'ts',
    directory: './database/seeds',
    stub: './database/seed.stub.ts',
  },
  ...knexSnakeCaseMappers(),
};

module.exports = config;
