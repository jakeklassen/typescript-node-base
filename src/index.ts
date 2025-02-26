import { sum } from '#app/lib/math.js';
import { waitFor } from '#app/lib/wait-for.js';

async function main() {
	console.log(sum(1, 2, 3));

	console.log('doing something complicated...');
	await waitFor();

	console.log('🐢🚀');
}

await main();
