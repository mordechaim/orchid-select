import { BaseTable } from '../baseTable';

export class AnotherRelationTable extends BaseTable {
  readonly table = 'another-relation';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
