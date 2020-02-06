import {
  Model,
  snakeCaseMappers,
  ModelOptions,
  QueryContext,
  QueryBuilder,
} from 'objection';

export class BaseModelWithoutTimestamps extends Model {
  readonly id!: number;

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

// tslint:disable-next-line:max-classes-per-file
export class BaseModel extends BaseModelWithoutTimestamps {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  async $beforeInsert(queryContext: QueryContext) {
    await super.$beforeInsert(queryContext);
    this.createdAt = new Date().toISOString() as any;
    this.updatedAt = new Date().toISOString() as any;
  }

  async $beforeUpdate(opt: ModelOptions, queryContext: QueryContext) {
    await super.$beforeUpdate(opt, queryContext);
    this.updatedAt = new Date().toISOString() as any;
  }

  async $beforeDelete(queryContext: QueryContext) {
    await super.$beforeDelete(queryContext);
    this.deletedAt = new Date().toISOString() as any;
  }
}
