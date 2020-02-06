import * as Knex from 'knex';
import { Account } from '../models/account.model';
import { Model } from 'objection';

export async function seed(knex: Knex): Promise<void> {
  const data = [
    {
      id: 1,
      email: 'blabla@d.tudj',
      firstName: 'Horatio',
      lastName: 'Nelson',
      hashedPassword: 'password',
    },
    {
      id: 2,
      email: 'somemail@d.tudj',
      firstName: 'John',
      lastName: 'Jarvis',
      hashedPassword: 'password',
    },
  ];
  // Insert via Objection.js models
  Model.knex(knex);
  await Account.query().insert(data);

  // Raw queries
  // await knex.raw(`SELECT 1+1;`)
}
