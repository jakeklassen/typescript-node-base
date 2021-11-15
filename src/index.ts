import { sum } from '#app/lib/math';
import { waitFor } from '#app/lib/wait-for';

(async () => {
  console.log(sum(1, 2, 3));

  console.log('doing something complicated...');
  await waitFor();

  console.log('🚀');
})();
