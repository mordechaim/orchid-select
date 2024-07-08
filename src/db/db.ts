import { orchidORM } from 'orchid-orm';
import { config } from './config';
import { OneTable } from './tables/one.table';
import { ThreeTable } from './tables/three.table';
import { TwoTable } from './tables/two.table.ts';

export const db = orchidORM(config.database, {
  one: OneTable,
  two: TwoTable,
  three: ThreeTable,
});
