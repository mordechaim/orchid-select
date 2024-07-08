import { BaseTable } from '../baseTable';
import { RelationTable } from './relation.table';

export class TestTable extends BaseTable {
  readonly table = 'test';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    test: t.text(),
    relationId: t.integer().nullable(),
  }));

  relations = {
    relation: this.belongsTo(() => RelationTable, {
      columns: ['relationId'],
      references: ['id'],
    }),
  };
}
