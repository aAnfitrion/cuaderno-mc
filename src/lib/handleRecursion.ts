import { rand, handle } from './handleInv';

export function randRock(arr: any) {
  const randy = rand();
  if (randy >= 1 && randy <= 10) {
		handle(arr, 'roca', 1);
		return 'roca';
  }
}
