import { mixin } from 'objection';
import * as ObjectionPassword from 'objection-password';
import { BaseModel } from './base.model';

export class Account extends mixin(
  BaseModel,
  ObjectionPassword({ passwordField: 'hashedPassword' }),
) {
  static tableName = 'accounts';

  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  hashedPassword: string;

  async verifyPassword(pass: string): Promise<boolean> {
    // @ts-ignore
    return super.verifyPassword(pass);
  }
}
