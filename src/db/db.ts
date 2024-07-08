import { orchidORM } from 'orchid-orm';
import { config } from './config';
import { TestTable } from './tables/test.table';
import { RelationTable } from './tables/relation.table';
import { AnotherRelationTable } from './tables/another-relation.table';

export const db = orchidORM(config.database, {
  test: TestTable,
  relation: RelationTable,
  anotherRelation: AnotherRelationTable,
});
