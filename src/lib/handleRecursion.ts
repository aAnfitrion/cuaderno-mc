import { rand, handle } from './handleInv';

export function randRock(arr: any, id: string) {
  const randy = rand();
  if (randy >= 1 && randy <= 10) {
		handle(arr, id, 1);
		return id;
  }
}
