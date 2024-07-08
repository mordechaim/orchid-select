import { BaseTable } from '../baseTable';
import { ThreeTable } from './three.table';

export class TwoTable extends BaseTable {
  readonly table = 'two';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
    threeId: t.integer().nullable(),
  }));

  relations = {
    three: this.belongsTo(() => ThreeTable, {
      columns: ['threeId'],
      references: ['id'],
    }),
  };
}
