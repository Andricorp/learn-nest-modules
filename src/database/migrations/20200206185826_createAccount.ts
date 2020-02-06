import * as Knex from 'knex';

const tableName = 'accounts';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, t => {
    t.increments();
    t.string('email')
      .notNullable()
      .unique();
    t.string('first_name').nullable();
    t.string('last_name').nullable();
    t.string('hashed_password').notNullable();
    t.timestamp('created_at', true).notNullable();
    t.timestamp('updated_at', true).notNullable();
    t.timestamp('deleted_at', true).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
