import { BaseTable } from '../baseTable';
import { TwoTable } from './two.table.ts';

export class OneTable extends BaseTable {
  readonly table = 'one';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    test: t.text(),
    twoId: t.integer().nullable(),
  }));

  relations = {
    two: this.belongsTo(() => TwoTable, {
      columns: ['twoId'],
      references: ['id'],
    }),
  };
}
