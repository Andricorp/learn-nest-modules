import * as Knex from 'knex';
// import { Model } from 'objection';

export async function seed(knex: Knex): Promise<void> {
    // Insert via Objection.js models
    // Model.knex(knex);
    // await ObjectionExtendedModel.query().insert({ property: 'value' });

    // Raw queries
    // await knex.raw(`SELECT 1+1;`)
}
