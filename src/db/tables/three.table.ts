import { BaseTable } from '../baseTable';

export class ThreeTable extends BaseTable {
  readonly table = 'three';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),
  }));
}
