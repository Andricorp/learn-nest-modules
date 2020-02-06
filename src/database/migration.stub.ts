import * as Knex from 'knex';

// const tableName = '';

export async function up(knex: Knex): Promise<void> {
    // Create table
    // await knex.schema.createTable(tableName, t => {
    //   t.increments();
    // });

    // Modify table
    // await knex.schema.table(tableName, (t: Knex.AlterTableBuilder) => {
    //   t.string('column').unique();
    //   t.renameColumn('old_name', 'new_name');
    // });
}

export async function down(knex: Knex): Promise<void> {
    // Drop table
    // await knex.schema.dropTable(tableName);

    // Rollback modifications column
    // await knex.schema.table(tableName, (t: Knex.AlterTableBuilder) => {
    //   t.dropColumn('column');
    //   t.renameColumn('new_name', 'old_name');
    // });
}
