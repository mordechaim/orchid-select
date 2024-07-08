import { db } from './src/db/db';

const result = await db.one.select('*', {
  two: (q) =>
    q.two.select('*', {
      three: (q) => q.three.select('*'),
    }),
});
