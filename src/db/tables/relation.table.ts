import { BaseTable } from '../baseTable';
import { AnotherRelationTable } from './another-relation.table';

export class RelationTable extends BaseTable {
  readonly table = 'relation';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    anotherId: t.integer().nullable(),
  }));

  relations = {
    anotherRelation: this.belongsTo(() => AnotherRelationTable, {
      columns: ['anotherId'],
      references: ['id'],
    }),
  };
}
