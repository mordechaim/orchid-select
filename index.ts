import { db } from './src/db/db';

const nestedCreate = await db.test
  .select('*', {
    relation: (q) => q.relation.select('*'),
  })
  .create({ test: 'test' });

const threeLevelSelect = await db.test.select('*', {
  relation: (q) =>
    q.relation.select('*', {
      anotherRelation: (q) => q.anotherRelation.select('*'),
    }),
});
